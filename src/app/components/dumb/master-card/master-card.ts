import { Component, Input } from '@angular/core';
import { MasterCard } from '@shared/interfaces/master-card';
import { Button } from '@shared/ui/button/button';
import { Card } from "@shared/ui/card/card";

@Component({
  selector: 'app-master-card-dumb',
  imports: [Button, Card],
  templateUrl: './master-card.html',
  styleUrl: './master-card.scss'
})
export class MasterCardDumb {
  @Input() master!: MasterCard;
}
