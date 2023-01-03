window.onscroll = () => {
    if (window.pageYOffset > 200) {
      document.getElementById("navbar").style.top = "-10%"
    }
    else {
        document.getElementById("navbar").style.top = "0"
    }
}