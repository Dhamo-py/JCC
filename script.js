function whatsapp(phoneNumber) {
    var message = encodeURIComponent("Hello! I visited your website and I'm interested in learning more about your courses. Could you please arrange a callback at your earliest convenience? Thank you!");
    var url = "https://wa.me/" + phoneNumber.replace(/\D/g, '') + "?text=" + message;
    window.open(url, "_blank");
}
function phone() {
    var PhoneNumber = "9578113101";
    window.location.href = "tel:" + 9578113101;
}

