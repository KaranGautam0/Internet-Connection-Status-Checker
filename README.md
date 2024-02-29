# Internet-Connection-Status-Checker
This JavaScript code checks the status of the internet connection when the window loads and displays information such as IP address and network strength.

## DEMO LIVE 
[***Click here***](https://karangautam0.github.io/Internet-Connection-Status-Checker/) to visit the website.

## Usage

![image](https://github.com/KaranGautam0/Internet-Connection-Status-Checker/assets/150542238/fd1694b6-6bb9-4b41-82b3-4c9bcc00c783)

![image](https://github.com/KaranGautam0/Internet-Connection-Status-Checker/assets/150542238/a182ceb1-23c5-4c27-b8c0-4279b5b4da7a)


![image](https://github.com/KaranGautam0/Internet-Connection-Status-Checker/assets/150542238/0c753d15-4e87-4c8b-a46c-4b91fc453050)

## How It Works

1. When the window loads, the `cheakInternetConnection` function is called.
2. It first sets the status text to "Checking...".
3. If the browser is online (`navigator.onLine`), it makes a request to the `https://api.ipify.org?format=json` API to get the IP address.
4. If the request is successful, it updates the IP address and status text to "Connected" and displays the network strength if available.
5. If there is an error in fetching the IP address, it updates the status text to "Disconnected" and sets the IP address and network strength to "-".
6. If the browser is offline, it sets the status text to "Disconnected" and sets the IP address and network strength to "-".
## Technologies Used

- HTML
- CSS
- JavaScript

## Author

This RGB Color Picker was created by  [Karan Kumar Guatam](https://github.com/KaranGautam0)
