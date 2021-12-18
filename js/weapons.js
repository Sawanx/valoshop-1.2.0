
let _ritoUsername_ = localStorage.getItem('username')

async function getWeapons(url){
  var response = await fetch(url)
  var weapons = await response.json();
  return weapons
}

let url = `https://api.checkvalorant.com/store/store/${_ritoUsername_}`

getWeapons(url)
.then(weapons => {
  document.getElementById('uname').innerText = localStorage.getItem('username');

  for (let wp_no = 1; wp_no < 5; wp_no++) {
    document.getElementById(`weapon${wp_no}`).src = weapons['weaponskins'][wp_no].image ;
    document.getElementById(`name${wp_no}`).innerText = weapons['weaponskins'][wp_no].name ;
  }

  document.querySelectorAll('.finisher').forEach(function(vidbutton){
    vidbutton.addEventListener('click', function() {
      let vidUrl = weapons['weaponskins'][parseInt(this.id[3])].video;
      if (vidUrl === null){
        alert("Fininsher Not Available");
        finisherClose();
        document.querySelector('.finisher_vid').style.display = 'none';
      } else {
        document.getElementById('fvid').src = vidUrl;
      }
    });
  });
})
.catch(() => {
  alert("Something Went Wrong :( , Plz Try Again ;)");
})


function finisherPlay() {
  document.querySelector('.finisher_vid').style.display = 'flex';
}

function finisherClose() {
  let x = document.querySelector('.finisher_vid')
  let finisherVideo = document.getElementById("fvid");
  x.onclick = function(div) {
    if (div.target.id !== 'fvid'){
      x.style.display = 'none';
      finisherVideo.pause();
    }
  };

}

