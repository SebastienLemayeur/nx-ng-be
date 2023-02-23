import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  standalone: true,
  selector: 'flight-booking',
  imports: [
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './flight-booking.component.html'
})
export class FlightBookingComponent {
}
