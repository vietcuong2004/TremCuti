// Thay đổi nội dung búc thư ở đây
var letterContent =" Cảm ơn em, bé iu của anh❤️\n" + 
                   "Bé iu nè, trông anh loi nhoi, thiếu nghiêm túc, và \"gợi đòn\" như vậy thui, nhưng thật ra anh luôn suy nghĩ rất nhiều, anh cũng cảm thấy rất nhiều áp lực."+ 
                   " Nhưng mà, từ khi em đến bên anh, càng ngày anh càng cảm thấy vui vẻ hơn. Em làm cho anh thấy có nhiều lí do để cười hơn, và anh cũng muốn cho em thêm nhiều lí do để cười hơn nữa." + 
                   " Cảm ơn em vì đã đến bên anh, anh yêu em nhiều lắm bé iuu cutiii nhất quả đất của anhhhh💕\n" +
                   "Ngiu của em,\n" + "ViViXiii - Bình An"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 25

// Hiệu ứng gõ chữ

// function effectWrite () {
//     var boxLetter = document.querySelector(".letterContent")
//     letterContentSplited = letterContent.split("")
    
//     letterContentSplited.forEach((val, index) => {
//         setTimeout(() => {
//             boxLetter.innerHTML += val    
//         }, durationWrite* index)
//     })
// }

function effectWrite() {
    var boxLetter = document.querySelector(".letterContent");

    if (boxLetter.innerHTML.trim() !== "") return; // Tránh viết lại nhiều lần

    let letterContentSplited = letterContent.split("");

    boxLetter.innerHTML = ""; // Xóa nội dung cũ

    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val.replace(/\n/g, "<br>"); // Chuyển \n thành <br>
        }, durationWrite * index);
    });
}


window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})

window.addEventListener("load", () => {
    let audio = new Audio("./AThousandYears.mp3"); // Đường dẫn file mp3
    audio.loop = true; // Lặp vô hạn
    audio.play().catch(error => console.log("Trình duyệt chặn autoplay: ", error));
});
