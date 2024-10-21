import {signOut} from "../login/auth.js";
import {supabase} from "../src/supabase.js";
import * as console from "node:console";

document.querySelector('#sign-out')?.addEventListener('click', async () => {
    const result = await signOut();

    if (result.success) {
        window.location.href = '/login/';
        localStorage.removeItem('session');
    }
});


document.querySelector("#saveGoal1").addEventListener("click", saveGoal1);

async function saveGoal1 () {
    const {data: {user}} = await supabase.auth.getUser();

    const targetWeight = document.querySelector("#target-weight").value;
    const activityLevel = document.querySelector('input[name="activity"]:checked').value;
    const targetDate = document.querySelector("#target-date").value;

    const {error} = await supabase
        .from("goal_1")
        .insert({
            user_id: user.id,
            target_weight: targetWeight,
            activity_level: activityLevel,
            target_date: targetDate,
        });

    if (error) {
        console.error("Error saving goal:", error.message);
        alert("There was an error saving your goal.");
    } else {
        alert("Goal saved successfully!");
    }
}

document.querySelector("#saveGoal2").addEventListener("click", saveGoal2);

async function saveGoal2 () {
    const {data: {user}} = await supabase.auth.getUser();

    const dailyStepCount = document.querySelector("#steps").value;

    const {error} = await supabase
        .from("goal_2")
        .insert({
            user_id: user.id,
            daily_step_count: dailyStepCount,
        });

      if (error) {
            console.error("Error saving goal:", error.message);
            alert("There was an error saving your goal.");
        } else {
            alert("Goal saved successfully!");
        }
}

document.querySelector("#saveGoal3").addEventListener("click", saveGoal3);

async function saveGoal3 () {
    const {data: {user}} = await supabase.auth.getUser();


    const weeklyWorkouts = document.querySelector('input[name="workouts"]:checked').value;

    const {error} = await supabase
        .from("goal_3")
        .insert({
            user_id: user.id,
            weekly_workouts: weeklyWorkouts,
        });

      if (error) {
            console.error("Error saving goal:", error.message);
            alert("There was an error saving your goal.");
        } else {
            alert("Goal saved successfully!");
        }
}
