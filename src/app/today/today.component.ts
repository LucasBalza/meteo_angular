import { TimeService } from '../time.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Subscription, tap } from 'rxjs';
import { SaintService } from '../saint.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css'],
})
export class TodayComponent implements OnInit, OnDestroy {
  // Propriétés de la classe
  public currentDateTime!: Date;
  private intervalId: any;
  public weatherData: any ;
  public firstMajorSaint?: string;
  private subscriptions: Subscription[] = [];

  // Constructeur
  constructor(
    private timeService: TimeService,
    private weatherService: WeatherService,
    private saintService: SaintService
  ) {}

  // Hook
  ngOnInit(): void {
    this.getCurrentDateTime();
    this.intervalId = setInterval(() => {
      this.getCurrentDateTime();
    }, 1000);// Met à jour l'heure chaque seconde (1000 ms)
    this.getTodayWeather(); 
    this.getFirstMajorSaint();
  }

  ngOnDestroy(): void {
    // Nettoie l'intervalle lors de la destruction du composant
    clearInterval(this.intervalId);

    // Se désabonner de tous les observables pour éviter les fuites de mémoire
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  // Fonction d'obtention de la date locale
  getCurrentDateTime() {
    this.currentDateTime = new Date();
  }

  // Fonction d'obtention de la météo du jour
  getTodayWeather() {
    const weatherSub = this.weatherService.getWeatherData()
    .subscribe({
      next: (data) => {
        this.weatherData = data;
      },
      error:(error) => {
        console.error('Une erreur est survenue : ', error);
      }
  });
    this.subscriptions.push(weatherSub);
  }

  // Fonction d'obtention du saint majeur du jour
  getFirstMajorSaint() {
    const saintSub = this.saintService.getFirstMajorSaint().pipe(
      tap( d => console.log(Object.keys(d.response.prenoms.majeurs))),
      //map( d => Object.keys(d.response.prenoms.majeurs[0])),
      //tap(d => console.log(d))
    ).subscribe({
      next: (data) => {
        //console.log(Object.keys(data.response.prenoms.majeurs[0]));
        this.firstMajorSaint = Object.keys(data.response.prenoms.majeurs)[0];
      },
      error: (error) => {
        console.error('Une erreur est survenue : ', error);
      }
  });
    this.subscriptions.push(saintSub);
  }
}