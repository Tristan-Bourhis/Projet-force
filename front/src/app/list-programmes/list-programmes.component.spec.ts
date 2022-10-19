import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProgrammesComponent } from './list-programmes.component';

describe('ProgrammeComponent', () => {
    let component: ListProgrammesComponent;
    let fixture: ComponentFixture<ListProgrammesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ListProgrammesComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListProgrammesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
