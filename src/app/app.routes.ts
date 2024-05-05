import { Routes } from '@angular/router';
import {QuestionComponent} from "./pages/question/question.component";
import {WelcomeComponent} from "./pages/welcome/welcome.component";
import {FooterComponent} from "./components/footer/footer.component";
import {FinishComponent} from "./pages/finish/finish.component";

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'end', component: FinishComponent },
  { path: 'question/:id', children: [
      { path: '', component: QuestionComponent },
      { path: '', component: FooterComponent, outlet: 'footer' }
    ]
  },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
