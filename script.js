function whatsapp(phoneNumber) {
    var message = encodeURIComponent("Hello, I would like to contact you.");
    var url = "https://wa.me/" + phoneNumber.replace(/\D/g, '') + "?text=" + message;
    window.open(url, "_blank");
}
function phone() {
    var PhoneNumber = "9841536867";
    window.location.href = "tel:" + 9841536867;
}
