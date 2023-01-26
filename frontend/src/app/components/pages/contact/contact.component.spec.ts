import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';
import { CURL } from 'src/app/shared/constants/urls';
import { Chats } from 'src/app/shared/models/contact';
import { User } from 'src/app/shared/models/User';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let userService: UserService;
  let user: User;
  let messageList: Chats[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ ContactComponent ],
      providers: [UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UserService);
   /* user = {
      name: 'test',
      email: 'test@example.com',
      password: 'testpassword',
    }; */
   /* messageList = [];
    spyOn(userService, 'currentUser').and.returnValue(user);
    fixture.detectChanges();
  }); */

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a message form control', () => {
    expect(component.messageForm.get('message')).toBeTruthy();
  });

  it('should set the uname and user variables correctly', () => {
    expect(component.uname).toBe('test');
    expect(component.user.name).toBe('test');
  });

  it('should call the sendMessage function with the correct message and uname', () => {
    spyOn(component.socket, 'emit').and.callThrough();
    component.submitMessage();
    expect(component.socket.emit).toHaveBeenCalledWith('message', '', 'test');
  });

  it('should subscribe to incomming messages', () => {
    spyOn(component.socket, 'on').and.callThrough();
    component.subscribeToMessage();
    expect(component.socket.on).toHaveBeenCalledWith("incomming", jasmine.any(Function));
  });

  it('should add incomming messages to the messageList', () => {
    const msg: Chats = {
      name: 'test',
      message: 'test message'
    };
    component.subscribeToMessage();
    component.socket.emit('incomming', msg);
    expect(component.messageList).toContain(msg);
  });

  it('should setup the socket connection with the correct url', () => {
    spyOn(component.socket, 'connect').and.callThrough();
    component.setupSocketConnection();
    expect(component.socket.connect).toHaveBeenCalledWith(CURL, {reconnection: true});
  });

});
});

