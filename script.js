// 



function audioPlayer() {
  
  let style = document.getElementById('style');
  style.innerHTML = `
  audio{
    margin: 30px 0px 0px 0px;
    
  }
  
  ul {
    padding: 0px 30px 0px 50px;
  }
  
  `;
let header = document.getElementById('header');
header.innerHTML = `
<h1>RadioApp</h1>
`;
let section = document.getElementById('section');
section.innerHTML = `
<hr />
<ul>Радиостанции:
<hr />
<li>Кан - Рэка/ Общественное Израильское радио.
<br>
<audio controls id = "audio1"></audio></li>
<hr />
<li> Европа Плюс/ Музыкальное радио России.
<br>
<audio controls id = "audio2"></audio></li>
<hr />
<li> Радио Эйлат/ Музыкальное радио Израиля.
<br>
<audio controls id = "audio3"></audio></li>
<hr />

</ul>
`;
section.style.textAlign = 'center';
/*section.style.margin = '1em';*/
let audio1 = document.getElementById("audio1");
audio1.innerHTML = `<source id = "source1" type="audio/mpeg">`;
let audio2 = document.getElementById('audio2');
audio2.innerHTML = `<source id = "source2" type="audio/mpeg">`;
/*audio.style.fontSize = '50px';*/

let links = ['https://kanliveicy.media.kan.org.il/icy/kanreka_mp3','https://emgregion.hostingradio.ru:8064/moscow.europaplus.mp3'];

let source1 = document.getElementById("source1");
source1.src = links[0];
let source2 = document.getElementById('source2');
source2.src = links[1];
}
audioPlayer();