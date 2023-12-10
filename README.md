# efood-proxy 🚀

efood-proxy is a proxy for the e-food.gr API.

## Table of Contents ✨  

- [Description](#description)
- [Installation](#installation)

## Description

efood-proxy serves as the backend for the E-mood Chrome extension, facilitating communication between the ReactJS frontend and the e-food.gr API endpoints.

## Installation

1. **Clone this repository:**

    ```bash
    git clone https://github.com/sotblad/efood-proxy.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd efood-proxy
    ```

3. **Install the dependencies using npm:**

    ```bash
    npm install
    ```

4. **Set your proxy server credentials as environment variables:**

    Before serving the `index.js` with `node run emoodapi`, make sure to set the following environment variables:

    - `PROXY_HOST`: The host of your proxy server.
    - `PROXY_PORT`: The port of your proxy server.
    - `PROXY_AUTH`: The authentication credentials for your proxy server.

    Example:

    ```bash
    export PROXY_HOST=your_proxy_host
    export PROXY_PORT=your_proxy_port
    export PROXY_AUTH=your_proxy_auth
    ```

    Ensure these environment variables are set before running the server.