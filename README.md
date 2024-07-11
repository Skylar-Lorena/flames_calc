
## Flames Love Calculator App

This React Native app brings the timeless FLAMES relationship compatibility test to life. Users can enter two names, and the app calculates their "relationship status" based on the FLAMES method, which playfully eliminates duplicate letters from their combined names until a single letter remains.

## Author

Lorenah M.

### Features

- **Immersive Welcome Screen:** Introduces the app with a captivating hero image and a clear explanation of the FLAMES method.
- **Interactive Love Calculator:** Allows users to input names and displays the calculated FLAMES result, fostering a sense of engagement.
- **Illustrative Sample Results:** Provides a set of pre-defined results as a reference, enhancing user understanding.

### Getting Started

**Prerequisites:**

- **Node.js and npm (or yarn):** Ensure these are installed on your system for dependency management.
- **Code Editor:** Choose your preferred code editor, such as Visual Studio Code or Atom, for development.

**Steps:**

1. **Clone the Repository:**

    Bash

    ```
    git clone https://github.com/your-username/flames-love-calculator.git
    
    ```

2. **Navigate to the Project Directory:**

    Bash

    ```
    cd flames_calc
    
    ```

3. **Install Dependencies:**

    Bash

    ```
    npm install
    
    ```

4. **Run the App:**

    Bash

    ```
    npm start
    
    ```

    This will launch the app on an Android emulator or connected device.

### Usage

1. Open the app on your device.
2. On the Welcome Screen, read the app's introduction and the explanation of the FLAMES method.
3. In the designated fields, enter the first name (male) and the second name (female).
4. Tap the "Calculate" button.
5. The app will process the names using the FLAMES method and display the calculated relationship status (e.g., Friends, Lovers, Enemies, etc.).
6. The sample results section provides examples of possible outcomes for reference.

### API Integration (Optional)

The app can optionally integrate with a free API to enhance the love calculation experience. Here's a breakdown of the process:

1. **Obtain an API Key:**

    - Create an account on [Rapid API](https://rapidapi.com/).
    - Search for a suitable FLAMES love calculator API.
    - Follow the API provider's instructions to obtain an API key.
2. **Replace Placeholder Key:**

    - Open the `LoveCalculator.js` file in your code editor.
    - Locate the `x-rapidapi-key` value within the `options` object for the fetch request.
    - Replace the placeholder key (`'bfbdf2878cmsh4edd65a2a1bb0ffp168e2fjsn08e891f3dd9c'`) with your actual API key.

**API Details**

The (optional) API used in this example follows a RESTful design and accepts a GET request to the following endpoint:

```
https://flames-love-calculator.p.rapidapi.com/flame/{maleName}/{femaleName}

```

**Request Parameters:**

- `maleName`: The first name (male) entered by the user.
- `femaleName`: The second name (female) entered by the user.

**Response Structure (Example):**

JSON

```
{
  "result": "FRIENDS" // The calculated relationship status based on the FLAMES method
}

```

**Error Handling:**

The app incorporates error handling mechanisms to gracefully handle potential issues during API communication. If an error occurs, the console will log the error message, and the app will display an appropriate message to the user.

### Contributing

We welcome contributions to improve this app! Feel free to fork the repository, make changes, and create pull requests to share your enhancements.

### Contact

For inquiries or feedback, you can reach me at:

- Email: [lorayne911@gmail.com] (<lorayne911@gmail.com>)
- Twitter:  [@Skylar_Lorena](https://twitter.com/Skylar_Lorena)

### License

This project is distributed under the MIT License. Refer to the LICENSE file for the full terms.
