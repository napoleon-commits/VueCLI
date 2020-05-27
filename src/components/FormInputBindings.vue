<template>
  <div>
       <!-- Text -->
        <input type="text" placeholder="edit me" v-model="message">
        <p>Message is: {{message}}</p>
        <!-- Multiline text -->
        <span>Multiline message is:</span>
        <p style="white-space: pre-line;">{{message}}</p>
        <br>
        <textarea 
            name="" 
            id="" 
            cols="30" 
            rows="10" 
            placeholder="add multiple lines"
            v-model="message"
        ></textarea>
        <!-- Checkbox -->
        <br>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{checked}}</label>
        <!-- Multiple checkboxes, bound to the same Array -->
        <br>
        <input type="checkbox" v-model="checkedNames" id="jack" value="Jack">
        <label for="jack">Jack</label>
        <input type="checkbox" v-model="checkedNames" id="john" value="John">
        <label for="john">John</label>
        <input type="checkbox" v-model="checkedNames" id="mike" value="Mike">
        <label for="mike">Mike</label>
        <br>
        <span>Checked Name: {{checkedNames}}</span>
        <br>
        <!-- Radio -->
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{picked}}</span>
        <!-- Select -->
        <select name="" id="" v-model="selected">
            <option disabled>Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <span>Selected: {{selected}}</span>
        <br>
        <!-- Multiple Select -->
        <select name="" id="" v-model="selectedMultiple" multiple>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <br>
        <span>Selected: {{selectedMultiple}}</span>
        <br>
        <select name="" id="" v-model="selectedDynamic">
            <option v-for="option in options" :value="option.value" :key="option">
                {{option.text}}
            </option>
        </select>
        <span>Selected: {{selectedDynamic}}</span>
        <br>
  </div>
</template>

<script>
export default {
    data(){
        return{
            message: "",
            checked: true,
            checkedNames: [],
            picked:"",
            selected: "",
            selectedMultiple: [],
            selectedDynamic: "A",
            options: [
                {text: "One", value: "A"},
                {text: "Two", value: "B"},
                {text: "Three", value: "C"},
            ]
        }
    }
}
</script>

<style>

</style>