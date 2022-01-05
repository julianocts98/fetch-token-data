const tokenAddressField = document.getElementById("tokenAddressField");
const nameField = document.getElementById("nameField");
const symbolField = document.getElementById("symbolField");
const decimalsField = document.getElementById("decimalsField");
const totalSupplyField = document.getElementById("totalSupplyField");
const fetchBtn = document.getElementById("fetchBtn");

const httpServer = "http://localhost:3000";

fetchBtn.onclick = async () => {
function updateTokenFields(tokenData) {
  nameField.value = tokenData.name;
  symbolField.value = tokenData.symbol;
  decimalsField.value = tokenData.decimals;
  totalSupplyField.value = tokenData.totalSupply;
}

async function fetchDataByAddress() {
  const urlRequest = httpServer + "/token/" + tokenAddressField.value;
  const response = await fetch(urlRequest);
  const dataJson = await response.json();

  if ("data" in dataJson) {
    updateTokenFields(dataJson.data);
  } else {
    const errorMsg =
      "Error!\nCode: " +
      dataJson.error.code +
      "\nMessage: " +
      dataJson.error.message;
    alert(errorMsg);
    resetFieldsValue(
      tokenAddressField,
      nameField,
      symbolField,
      decimalsField,
      totalSupplyField
    );
    tokenAddressField.focus();
  }
}

fetchBtn.onclick = async () => {
  await fetchDataByAddress();
};
