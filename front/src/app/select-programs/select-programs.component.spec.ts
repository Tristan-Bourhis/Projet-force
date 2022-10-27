import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProgramsComponent } from './select-programs.component';

describe('HomeComponent', () => {
    let component: SelectProgramsComponent;
    let fixture: ComponentFixture<SelectProgramsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ SelectProgramsComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SelectProgramsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
