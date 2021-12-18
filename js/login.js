$(function () {
	let $qus = $(".qus");
	let $ans = $(".ans");

	$qus.click(function () {
		$(this).next().slideToggle("slow");
		$(this).toggleClass("active");

		$(this).parent().siblings().find(".qus").removeClass("active");
		$(this).parent().siblings().find(".ans").slideUp("slow");
	});

	$(".menu p").click(function () {
		$(this)
			.parent()
			.siblings(".item-container")
			.children(".hide")
			.addClass("hide-mark");
		$(this)
			.parent()
			.siblings(".item-container")
			.children(".hide-mark")
			.fadeToggle("slow");

		if ($(this).html() == "+ More") {
			$(this).html("- Hide");
		} else {
			$(this).html("+ More");
		}
	});
});




let form = document.getElementById('login');
let username, password, region;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  document.querySelector('.preloader').style.display = 'flex';

  username = document.getElementById('riotid').value;
  password = document.getElementById('pswrd').value;
  region = document.getElementById('region').value;

  console.log(username, password)

  async function getWeapons(url, data) {
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })

    let loginData = await response;
    return loginData
  }

  let url = "https://api.checkvalorant.com/login/login";
  let data = {
    "RitoID": username,
    "RitoPass": password,
    "Region": region
    }
  
  if (username === localStorage.getItem('username') && password === localStorage.getItem('password')){
    window.open("/weapons.html", target="_self");
    document.querySelector('.preloader').style.display = 'none';
  }
  else{
    getWeapons(url, data)
    .then((wep) => {
      if (wep.status === 200){
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        window.open("/weapons.html", target="_self");
        document.querySelector('.preloader').style.display = 'none';
      }else{
        alert("Wrong Credentials :( , Plz Try Again ;)");
        form.reset()
        document.querySelector('.preloader').style.display = 'none';
      }
      })
    .catch(() => {
      alert("Something Went Wrong :( , Plz Try Again ;)");
      document.querySelector('.preloader').style.display = 'none';
    })

  }


})
