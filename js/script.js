// ini javascript
function replaceName() {
  let name = prompt("Siapakah nama anda?", "");
  document.getElementById("name").innerHTML = name;
}

replaceName();

// Program Slide gambar
let indexSlide = 1;
showslide(1);

function nextSlide(n) {
  showslide((indexSlide += n));
}
function showslide(n) {
  let listImage = document.getElementsByClassName("MainArticle_Banner_Content");
  console.log(listImage);

  if (n > listImage.length) {
    indexSlide = 1;
  }

  let index = 0;
  while (index < listImage.length) {
    listImage[index].style.display = "none";
    index++;
  }

  listImage[indexSlide - 1].style.display = "block";
}

setInterval(() => nextSlide(1), 3000);
// document.getElementById("gantiNama").addEventListener("click", function () {
//   replaceName();
// });

function setSenderUI(nama, tanggalLahir, jenisKelamin, pesan) {
  document.getElementById("sender-nama").innerHTML = nama;
  document.getElementById("sender-tanggal-lahir").innerHTML = tanggalLahir;
  document.getElementById("sender-jenis-kelamin").innerHTML = jenisKelamin;
  document.getElementById("sender-pesan").innerHTML = pesan;
}

function validateform() {
  const nama = document.forms["message-form"]["nama"].value;
  const tanggalLahir = document.forms["message-form"]["tanggal-lahir"].value;
  const jenisKelamin = document.forms["message-form"]["jenis-kelamin"].value;
  const pesan = document.forms["message-form"]["pesan"].value;

  if (nama == "" || tanggalLahir == "" || jenisKelamin == "" || pesan == "") {
    alert("Tidak boleh ada yang kosong");
    return false;
  }

  setSenderUI(nama, tanggalLahir, jenisKelamin, pesan);
  return false;
}
