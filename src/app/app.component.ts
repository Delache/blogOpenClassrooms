import { Post } from './../models/post';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  compt1 = 0;
  compt2 = 1;
  compt3 = 2;
  posts: Post[] = [
    {title: 'Mon premier post',
     // tslint:disable-next-line: max-line-length
     content: 'Aliquam eleifend, enim eu fermentum consectetur, justo enim tempor velit, et porta turpis ligula a enim. Sed placerat neque quis risus elementum, et sagittis erat convallis. Mauris porta vel orci id imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut placerat sodales turpis, rhoncus ultricies nisi varius nec. Phasellus congue neque ac diam imperdiet, in commodo libero tincidunt. Quisque posuere metus sit amet tellus faucibus tincidunt. Integer consectetur dictum nisl, cursus consectetur lacus convallis ut. Nulla facilisi. Phasellus pulvinar lorem felis, vel commodo dui laoreet a. Quisque pretium, neque eu auctor efficitur, lectus urna blandit tortor, at tempus metus elit vel orci. Donec placerat elementum nisi a varius. ',
     loveIts: this.compt1,
     createdAt: new Date(),
    },  {title: 'Mon deuxième post',
    // tslint:disable-next-line: max-line-length
    content: 'Pellentesque sit amet nisi cursus, vulputate nunc vitae, ultricies sapien. Vestibulum finibus est tempor odio fermentum interdum. Mauris neque tellus, fringilla nec eros eget, venenatis ultrices arcu. Vestibulum ullamcorper finibus arcu at consectetur. Sed pharetra, urna at hendrerit facilisis, purus nibh sollicitudin turpis, vitae tempus ante leo sed est. Nulla facilisi. Nullam sed odio vehicula, malesuada libero id, efficitur odio. Morbi feugiat finibus dolor, in malesuada dui maximus id. Mauris a pharetra ipsum, vitae tempor nisl. Nunc nulla magna, sodales eget condimentum eu, tempus id orci. Integer egestas, est eget commodo hendrerit, nisl massa gravida urna, eu pellentesque lacus ligula in leo. ',
    loveIts: this.compt2,
    createdAt: new Date(),

   },  {title: 'Encore un post',
     // tslint:disable-next-line: max-line-length
   content: 'Nam commodo ullamcorper faucibus. Aenean elementum metus non diam pulvinar egestas vitae sit amet metus. Quisque sed urna magna. Vestibulum aliquam lectus at placerat commodo. Pellentesque convallis tellus vitae felis dictum, sodales vulputate purus tempor. Nullam dictum quis arcu vitae suscipit. Praesent porttitor in ipsum at bibendum. Nam tincidunt elit urna, id dictum sapien gravida ac. Nullam porttitor ultrices odio eu blandit. ',
   loveIts: this.compt3,
   createdAt: new Date(),
  }
  ];
}
