// Pizza.jsx
import React, { useEffect } from 'react';
import './styles/pizza.css'; // Import the styles for this page
const Pizza = () => {
    useEffect(() => {
        startPizzaProcess(); // Run the pizza process when the component mounts
    }, []); // Empty dependency array ensures the effect runs once
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));} // Return a promise that resolves after ms milliseconds
    async function startPizzaProcess() {
        while (true) {// infinity loops because why not
            await prepareAndServePizza();}} // Call the function to start the process loop infinity
    async function resetCard() {
        const messageElement = document.getElementById('message'); // Get the message element
        const imageElement = document.getElementById('image'); // Get the image element
        messageElement.innerText = ''; // Clear the message
        imageElement.src = '';} // Clear the image
    async function showMessage(message, image) { // Function declaration with async to await
        document.getElementById('message').innerText = message; // Set the message
        document.getElementById('image').src = image; // Set the image source
        await delay(2000); // Display message and image for 2 seconds
        document.getElementById('message').innerText = '';  // Clear the message
        document.getElementById('image').src = '';} // Clear the  image
    async function preparePizza() {
        await showMessage("Started preparing pizza...", 'PBASE.png');
        await delay(1000);}
    async function makeBase() {
        await showMessage("Made the base", 'base.png');
        await delay(1500);} // Wait for 1500 milliseconds
    async function addSauceAndCheese() {
        await showMessage("Added the sauce and cheese", 'baseCheese.png');
        await delay(2000);}
    async function addToppings() {
        await showMessage("Added the pizza toppings", 'toppings.png');
        await delay(2500);}
    async function cookPizza() {
        await showMessage("Cooked the pizza", 'Cooked.png');
        await delay(3000);}
    function servePizza() {
        showMessage("Pizza is ready", 'pizza.png');}
    async function prepareAndServePizza() { // Function declaration with async to await
        await preparePizza();
        await resetCard(); // Wait for each function to complete before moving to the next
        await makeBase();
        await addSauceAndCheese();
        await addToppings();
        await cookPizza();
        servePizza();
        await delay(2000);}
    startPizzaProcess(); // Call the function to start the process
    return (
        <div className="pizza-container">
            {/* ... (HTML content for the rotating pizza) */}
            <div className="card-container">
                <div className="rotating-card">
                    <div className="card">
                        <img className="pizza-image" id="image" src="" alt="Pizza" />
                        <p className="message" id="message"></p>
                    </div>
                </div>
            </div>
        </div>);};
export default Pizza;
