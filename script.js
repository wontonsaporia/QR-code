const input = document.getElementById("textInput");
const button = document.getElementById("generateBtn");
const qrContainer = document.getElementById("qrcode");

button.addEventListener("click", () => {
  const value = input.value.trim();

  qrContainer.innerHTML = "";

  if (!value) {
    alert("URLまたは文字列を入力してください。");
    return;
  }

  QRCode.toCanvas(value, { width: 256, margin: 2 }, function (error, canvas) {
    if (error) {
      console.error(error);
      alert("QRコードの生成に失敗しました。");
      return;
    }

    qrContainer.appendChild(canvas);
  });
});
