import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports:[HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should be same text',()=>{
  //   const result = TestBed.createComponent(FooterComponent);
  //   result.detectChanges();
  //   const compile=result.nativeElement as HTMLElement;
  //   expect(compile.querySelector('pre')?.textContent).toContain('Privacy Policy   o   Sitemap   o   Accessblity   o   Support   o   @Copyrights 2024')

  // })
});
