let app = new Vue({
   el: '.main',
   data:{
      showMain: true,
      showSocial: false,
      showAchivments: false,
      showQuestions: false,
      showResult: false,
      number: 0,
      score: {
         'castle': 0,
         'rampart': 0,
         'tower': 0,
         'inferno': 0,
         'necropolis': 0,
         'dungeon': 0,
         'stronghold': 0,
         'fortress': 0,
      },
      totalGame: localStorage.getItem('sc2TotalGame') ? JSON.parse(localStorage.getItem('sc2TotalGame')) : {
         'castle': 0,
         'rampart': 0,
         'tower': 0,
         'inferno': 0,
         'necropolis': 0,
         'dungeon': 0,
         'stronghold': 0,
         'fortress': 0,
      },
      totalGames: localStorage.getItem('sc2TotalGames') ? localStorage.getItem('sc2TotalGames') : 0,
      questions: questions,
      results: results,
      resultRace: 'castle',
   },
   methods: {
      goToMain(){
         this.showMain = true
         this.showSocial = false
         this.showAchivments = false
         this.showQuestions = false
         this.showResult = false
      },
      goToSocial(){
         this.showMain = false
         this.showSocial = true
         this.showAchivments = false
         this.showQuestions = false
         this.showResult = false
      },
      goToAchivments() {
         if(this.totalGames > 0){
            this.showMain = false
            this.showSocial = false
            this.showAchivments = true
            this.showQuestions = false
            this.showResult = false
         } else {
            this.goToQuestions()
         }
      },
      goToQuestions(){
         this.score = {
            'castle': 0,
            'rampart': 0,
            'tower': 0,
            'inferno': 0,
            'necropolis': 0,
            'dungeon': 0,
            'stronghold': 0,
            'fortress': 0,
         }
         this.showMain = false
         this.showSocial = false
         this.showAchivments = false
         this.showQuestions = true
         this.showResult = false
      },
      goToResult(race){
         this.showMain = false
         this.showSocial = false
         this.showAchivments = false
         this.showQuestions = false
         this.showResult = true
         this.resultRace = race
      },
      nextQuestions(answer){
         if(this.number == 25) {
            this.number = 0
            this.endGame();
         } else {
            this.number++
         }
         eval(answer)
      },
      endGame(){
         this.totalGames++;
         localStorage.setItem('sc2TotalGames', this.totalGames)
         // За́мок
         if(this.score.castle > this.score.rampart && this.score.castle > this.score.tower && this.score.castle > this.score.inferno && this.score.castle > this.score.necropolis && this.score.castle > this.score.dungeon && this.score.castle > this.score.stronghold && this.score.castle > this.score.fortress ){
            this.goToResult('castle')
            this.totalGame.castle++
         }
         // Опло́т
         else if (this.score.rampart > this.score.castle && this.score.rampart > this.score.tower && this.score.rampart > this.score.inferno && this.score.rampart > this.score.necropolis && this.score.rampart > this.score.dungeon && this.score.rampart > this.score.stronghold && this.score.rampart > this.score.fortress) {
            this.goToResult('rampart')
            this.totalGame.rampart++
         }
         // Ба́шня
         else if (this.score.tower > this.score.castle && this.score.tower > this.score.rampart && this.score.tower > this.score.inferno && this.score.tower > this.score.necropolis && this.score.tower > this.score.dungeon && this.score.tower > this.score.stronghold && this.score.tower > this.score.fortress){
            this.goToResult('tower')
            this.totalGame.tower++
         }
         // Инфе́рно
         else if (this.score.inferno > this.score.castle && this.score.inferno > this.score.rampart && this.score.inferno > this.score.tower && this.score.inferno > this.score.necropolis && this.score.inferno > this.score.dungeon && this.score.inferno > this.score.stronghold && this.score.inferno > this.score.fortress){
            this.goToResult('inferno')
            this.totalGame.inferno++
         }
         // Некро́полис
         else if (this.score.necropolis > this.score.castle && this.score.necropolis > this.score.rampart && this.score.necropolis > this.score.tower && this.score.necropolis > this.score.inferno && this.score.necropolis > this.score.dungeon && this.score.necropolis > this.score.stronghold && this.score.necropolis > this.score.fortress){
            this.goToResult('necropolis')
            this.totalGame.necropolis++
         }
         // Подземелье
         else if (this.score.dungeon > this.score.castle && this.score.dungeon > this.score.rampart && this.score.dungeon > this.score.tower && this.score.dungeon > this.score.inferno && this.score.dungeon > this.score.necropolis && this.score.dungeon > this.score.stronghold && this.score.dungeon > this.score.fortress){
            this.goToResult('dungeon')
            this.totalGame.dungeon++
         }
         // Цитадель
         else if (this.score.stronghold > this.score.castle && this.score.stronghold > this.score.rampart && this.score.stronghold > this.score.tower && this.score.stronghold > this.score.inferno && this.score.stronghold > this.score.necropolis && this.score.stronghold > this.score.dungeon && this.score.stronghold > this.score.fortress){
            this.goToResult('stronghold')
            this.totalGame.stronghold++
         }
         // Кре́пость
         else {
            this.goToResult('fortress')
            this.totalGame.fortress++
         }
         localStorage.setItem('sc2TotalGame', JSON.stringify(this.totalGame))
      }
   },
   computed: {
      // totalScore(){
      //    let score=0
      //    for(let i in this.totalGame){
      //       score+=(this.totalGame[i]*results[i].points)
      //    }
      //    return score
      // },
      openRaces(){
         let count = 0
         for(let i in this.totalGame){
            if(this.totalGame[i]>0) count++
         }
         return count
      },
      favoriteRace(){
         let max = 'castle'
         for(let i in this.totalGame){
            if (this.totalGame[i] > this.totalGame[max]){
               max=i
            }
         }
         return results[max].name
      },
      showResultRace(){
         return{
            'castle' : this.totalGame.castle > 0 ? true : false,
            'rampart' : this.totalGame.rampart > 0 ? true : false,
            'tower' : this.totalGame.tower > 0 ? true : false,
            'inferno' : this.totalGame.inferno > 0 ? true : false,
            'necropolis' : this.totalGame.necropolis > 0 ? true : false,
            'dungeon' : this.totalGame.dungeon > 0 ? true : false,
            'stronghold' : this.totalGame.stronghold > 0 ? true : false,
            'fortress' : this.totalGame.fortress > 0 ? true : false,
         }
      }
   }
})

let audio = new Audio('audio/soundtrack.mp3')
let audio_btn = document.querySelector('.btn__sound')
let audio_icon = document.querySelector('.btn__sound i')

audio.muted = true;
audio.autoplay = true;
audio.volume = 0.5;
audio.loop = true;

audio.addEventListener('loadmetadata', function(){
   audio.currentTime = 0 + Math.random() * (audio.duration + 1 - 0)
})

audio_btn.addEventListener('click', function(){
   if(audio.muted){
      audio.muted = false
      audio_icon.classList.add('fa-volume-up')
      audio_icon.classList.remove('fa-volume-off')
   }else if(!audio.muted){
      audio.muted = true
      audio_icon.classList.add('fa-volume-off')
      audio_icon.classList.remove('fa-volume-up')
   }
}) 