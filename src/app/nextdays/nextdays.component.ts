
import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Subscription, tap } from 'rxjs';


@Component({
  selector: 'app-nextdays',
  templateUrl: './nextdays.component.html',
  styleUrls: ['./nextdays.component.css']
})
export class NextdaysComponent implements OnInit, OnDestroy {
  // Propriétés de la classe
  public weatherData: any ;
  public firstMajorSaint?: string;
  private subscriptions: Subscription[] = [];

  constructor(public weatherService: WeatherService) {}

  // Hook
  ngOnInit(): void {
    this.getWeekWeather();
  }

  ngOnDestroy(): void {
    // Se désabonner de tous les observables pour éviter les fuites de mémoire
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  // Fonction d'obtention de la météo du jour
  getWeekWeather() {
    const weatherWeekSub = this.weatherService.getWeatherData()
    .subscribe({
      next: (data) => {
        this.weatherData = data;
      },
      error:(error) => {
        console.error('Une erreur est survenue : ', error);
      }
  });
    this.subscriptions.push(weatherWeekSub);
  }
}
