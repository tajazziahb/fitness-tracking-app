import {supabase} from "../src/supabase.js";
import { signOut } from "../login/auth.js";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("progressForm").addEventListener("submit", trackProgress);
    document.getElementById('progressModal').addEventListener('click', closeProgressModal);

    // Load recent goal progress and draw chart when the page loads
    loadRecentGoals();
    loadWeeklyProgressChart();
});

// Hook up the sign-out functionality
    document.querySelector('#sign-out')?.addEventListener('click', async () => {
        const result = await signOut();

        if (result.success) {
            window.location.href = '/login/';
            localStorage.removeItem('session');
        }
    });

async function trackProgress(event) {
    event.preventDefault();

    const workoutType = document.getElementById("workoutType").value;
    const duration = Number(document.getElementById("workoutDuration").value);
    const calories = Number(document.getElementById("caloriesBurned").value);

    if (!workoutType || !duration || !calories) {
        showProgressModal('Error', 'Please fill out all fields.');
        return;
    }

    const {data: {user}} = await supabase.auth.getUser();

    const {error} = await supabase
        .from("goal_progress")
        .insert({
            user_id: user.id,
            workout_type: workoutType,
            duration: duration,
            calories_burned: calories,
        });

    if (error) {
        console.error('Error logging progress:', error.message);
        showProgressModal('Error', 'There was an error logging your progress.');
    } else {
        showProgressModal('Success', 'Workout logged successfully!');
        clearProgressFields(["#workoutType", "#workoutDuration", "#caloriesBurned"]);
        loadRecentGoals(); // Refresh the recent goals displayed
        loadWeeklyProgressChart(); // Refresh the chart
    }
}

function showProgressModal(title, message) {
    document.getElementById('progressModalTitle').innerText = title;
    document.getElementById('progressModalMessage').innerText = message;
    document.getElementById('progressModal').classList.remove('hidden');
    document.getElementById('progressModal').classList.add('modal-open');
}

function closeProgressModal() {
    document.getElementById('progressModal').classList.remove('modal-open');
    document.getElementById('progressModal').classList.add('hidden');
}

function clearProgressFields(fields) {
    fields.forEach(selector => {
        document.querySelector(selector).value = '';
    });
}

async function loadRecentGoals() {
    const {data: {user}, error: userError} = await supabase.auth.getUser();

    if (userError) {
        console.error('Error retrieving user:', userError);
        return;
    }

    const {data: goalsData, error} = await supabase
        .from('goal_progress')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', {ascending: false})
        .limit(3);

    if (error) {
        console.error('Error loading goal progress:', error);
    } else {
        displayRecentGoals(goalsData);
    }
}

function displayRecentGoals(goalsData) {
    const recentGoalsElement = document.getElementById('recent-goals');

    if (!recentGoalsElement) {
        console.error('Recent goals element not found.');
        return;
    }

    if (goalsData.length === 0) {
        recentGoalsElement.innerHTML = '<p>No recent goals found.</p>';
        return;
    }

    recentGoalsElement.innerHTML = goalsData.map(goal => `
        <div class="card card-bordered shadow-lg">
            <div class="card-body">
                <h4 class="card-title">Workout Type: ${goal.workout_type}</h4>
                <p>Duration: ${goal.duration} minutes</p>
                <p>Calories Burned: ${goal.calories_burned}</p>
                <p>Date: ${new Date(goal.created_at).toLocaleDateString()}</p>
            </div>
        </div>
    `).join('');
}

async function loadWeeklyProgressChart() {
    const {data: {user}, error: userError} = await supabase.auth.getUser();

    if (userError) {
        console.error('Error retrieving user:', userError);
        return;
    }

    const {data: progressData, error} = await supabase
        .from('goal_progress')
        .select('workout_type, duration, calories_burned')
        .eq('user_id', user.id)
        .order('created_at');

    if (error) {
        console.error('Error loading progress:', error);
    } else {
        // Group data by workout type
        const workoutData = progressData.reduce((acc, curr) => {
            if (!acc[curr.workout_type]) {
                acc[curr.workout_type] = {
                    duration: 0,
                    calories: 0
                };
            }
            acc[curr.workout_type].duration += curr.duration;
            acc[curr.workout_type].calories += curr.calories_burned;
            return acc;
        }, {});

        const workoutTypes = Object.keys(workoutData);
        const durations = workoutTypes.map(type => workoutData[type].duration);
        const calories = workoutTypes.map(type => workoutData[type].calories);

        // Clear any existing chart
        const chartCanvas = document.getElementById('myChart');
        if (chartCanvas.__chart) {
            chartCanvas.__chart.destroy();
        }

        // Create new chart
        const ctx = chartCanvas.getContext('2d');
        chartCanvas.__chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: workoutTypes,
                datasets: [
                    {
                        label: 'Duration (minutes)',
                        data: durations,
                        backgroundColor: 'rgba(50, 205, 50, 0.5)',
                        borderColor: 'rgba(50, 205, 50, 1)',
                        borderWidth: 1,
                        yAxisID: 'y'
                    },
                    {
                        label: 'Calories Burned',
                        data: calories,
                        backgroundColor: 'rgba(255, 165, 0, 0.5)',
                        borderColor: 'rgba(255, 165, 0, 1)',
                        borderWidth: 1,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Duration (minutes)'
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: 'Calories Burned'
                        },
                        grid: {
                            drawOnChartArea: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'bottom',
                    }
                }
            }
        });
    }
}