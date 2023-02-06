// Traccia
// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
// Qui trovate HTML e CSS ed alcuni esempi di stamattina (trovato l'easter egg?). cercate di analizzarli per capire come intervenire sul countdown.
// https://github.com/TizianoN/timing-funcitons
// Consigli
// Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
// Da quante ore è composto un giorno?
// Da quanti minuti è composta un'ora?
// Da quanti secondi è composto un minuto?
// Da quanti millisecondi è composto un secondo?
// Quanti millisecondi mi separano da domani alle 9:30?
// Esiste un oggetto JS in grado di gestire le date?
// Esistono dei metodi per trasformare una data in millisecondi?

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const titleEl = document.getElementById("title");

const now = new Date();
const tomorrow = new Date("2023-02-06 11:12");
const secToDate = parseInt((tomorrow - now) / 1000);

titleEl.innerHTML = "Time to Monday 06-02-2023 09:30 ";
let totalSeconds = secToDate;
const timer = setInterval(stampaTempoTrascorso, 1000);
stampaTempoTrascorso();

function stampaTempoTrascorso() {
  --totalSeconds;
  if (totalSeconds <= 0) {
    clearInterval(timer);
  }
  // confetti({
  //   particleCount: 100,
  //   spread: 160,
  // });

  const seconds = totalSeconds % 60;
  const minutes = parseInt((totalSeconds / 60) % 60);
  const hours = parseInt((totalSeconds / 60 / 60) % 24);
  const days = parseInt(totalSeconds / 60 / 60 / 24);

  secondsEl.innerHTML = seconds < 10 ? "0" + seconds : seconds;
  minutesEl.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  hoursEl.innerHTML = hours < 10 ? "0" + hours : hours;
  daysEl.innerHTML = days < 10 ? "0" + days : days;
}
