window.addEventListener("load", cheakInternetConnection);
function cheakInternetConnection() {
  const statusText = document.getElementById("statusText");
  const ipAddressText = document.getElementById("ipAddressText");
  const networkStrangthText = document.getElementById("networkStrangthText");

  statusText.textContent = "Cheaking...";

  if (navigator.onLine) {
    fetch("https://api.ipify.org?format=json")
      .then((Response) => Response.json())
      .then((data) => {
        ipAddressText.textContent = data.ip;
        statusText.textContent = "Connected";

        const connection = navigator.connection;

        const networkStrangth = connection
          ? connection.downlink + "Mbps"
          : "Unknown";
        networkStrangthText.textContent = networkStrangth;
      })
      .catch(() => {
        statusText.textContent = "Disconnected";
        ipAddressText.textContent = "-";
        networkStrangthText.textContent = "-";
      });
  } else {
    statusText.textContent = "Disconnected";
    ipAddressText.textContent = "-";
    networkStrangthText.textContent = "-";
  }
}
