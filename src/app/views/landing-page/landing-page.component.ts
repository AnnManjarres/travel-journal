import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HeroComponent } from "../../components/landing-page/hero/hero.component";
import { AboutSectionComponent } from "../../components/landing-page/about-section/about-section.component";
import { TestimoniesComponent } from "../../components/landing-page/testimonies/testimonies.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.css',
    imports: [NavbarComponent, HeroComponent, AboutSectionComponent, TestimoniesComponent]
})
export class LandingPageComponent {

}
