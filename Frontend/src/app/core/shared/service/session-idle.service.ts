import { Injectable } from '@angular/core';
import { AuthService } from '../../service/auth.service';
declare const window: any;

@Injectable({
    providedIn: 'root'
})

export class SessionIdleService {

    t: any;
    timeoutPeriod = 10000;
    resetUserActivity: any = function (): void { };
    incrementCounter: any = function (): void { };

    constructor(private authService: AuthService) { }

    public checkSessionIdle = () => {
        this.callUserEvents();
    }

    public removeLocalStorage = () => {
        localStorage.removeItem("loggedOut");
    }

    public resetUserActivity2 = () => {
        this.resetTimer();
    }

    public checkIfUserLoggedOut = () => {
        if (localStorage.getItem("loggedOut")) {
            this.removeListener();
            this.authService.logout();
        }
    }

    public removeListener = () => {
        this.incrementCounter = function (): void { };
        this.resetUserActivity = function (): void { };

        // window.onload=this.incrementCounter; 
        // window.onfocus = this.incrementCounter;  
        window.onscroll = this.resetUserActivity;
        window.onmousemove = this.resetUserActivity;
        window.ondblclick = this.resetUserActivity;
        window.oncontextmenu = this.resetUserActivity;
        window.onclick = this.resetUserActivity;
        window.onkeypress = this.resetUserActivity;
        window.onpageshow = this.resetUserActivity;
        window.onresize = this.resetUserActivity;
        window.ondrag = this.resetUserActivity;
        window.oncopy = this.resetUserActivity;
        window.oncut = this.resetUserActivity;
        window.onpaste = this.resetUserActivity;
    }

    public incrementCounter2 = () => {
        if (localStorage.getItem("counter") == "NaN") {
            localStorage.setItem("counter", "0");
        } else {
            var count = localStorage.getItem("counter") || '0';
            var counter = parseInt(count) + 1;
            localStorage.setItem("counter", counter.toString());
        }
        this.resetTimer();
    }

    public handleIdleTimedOut = () => {
        console.log('handletimeout');
        window.sharedCounter = localStorage.getItem("counter");
        if (window.localCounter == window.sharedCounter) {
            //If no tabs are opened,then popup will be shown here.
            localStorage.setItem("loggedOut", "true");
            this.checkIfUserLoggedOut();
        }
    }

    public resetTimer = () => {
        console.log('reset');
        window.localCounter = localStorage.getItem("counter");
        clearTimeout(this.t);
        this.t = setTimeout(this.handleIdleTimedOut, this.timeoutPeriod);
    }

    public callUserEvents = () => {
        this.incrementCounter = this.incrementCounter2;
        this.incrementCounter();
        this.resetUserActivity = this.resetUserActivity2;

        // window.onload=this.incrementCounter;
        // window.onfocus = this.incrementCounter;  
        window.onscroll = this.resetUserActivity;
        window.onmousemove = this.resetUserActivity;
        window.ondblclick = this.resetUserActivity;
        window.oncontextmenu = this.resetUserActivity;
        window.onclick = this.resetUserActivity;
        window.onkeypress = this.resetUserActivity;
        window.onpageshow = this.resetUserActivity;
        window.onresize = this.resetUserActivity;
        window.ondrag = this.resetUserActivity;
        window.oncopy = this.resetUserActivity;
        window.oncut = this.resetUserActivity;
        window.onpaste = this.resetUserActivity;
    }

}