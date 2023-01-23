import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { io } from 'socket.io-client';
import { UserService } from 'src/app/services/user.service';
import { CURL } from 'src/app/shared/constants/urls';
import { Chats } from 'src/app/shared/models/contact';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  socket:any
  user!:User;
  uname!:string;
  messageList:Chats[] = [];

  constructor (private userService: UserService, private formBuilder: FormBuilder) {
    this.user = this.userService.currentUser;
    this.uname = this.user.name;
  }
  messageForm = this.formBuilder.group({
    message: '',
  });

  ngOnInit(): void {
    this.setupSocketConnection();
    this.subscribeToMessage()
  }
  setupSocketConnection() {
    //this.chatService.setupSocketConnection;
    this.socket = io(CURL, {reconnection: true});
  }

  submitMessage() {
    const message = this.messageForm.get('message')?.value;
    if(message) {
      this.sendMessage(message, this.uname);
    }
    this.messageForm.reset();
  }

  subscribeToMessage() {
    this.socket.on("incomming", (msg:Chats) => {
      //alert(msg.message);
      this.messageList = [...this.messageList, msg];
    })
  }

  sendMessage(msg: string, name:string) {
      this.socket.emit('message', msg, name);
  }

}
