import {Injectable} from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class ProfilePicService {
  public getStyles(accountName: string): string {
    const firstLetter: string = accountName.charAt(0).toLowerCase();
    if ('a' <= firstLetter && firstLetter <= 'f') {
      return 'size-10 rounded-full flex items-center justify-center font-semibold text-base bg-green-400 border-[1.5px] border-green-700 text-green-900';
    } else if ('g' <= firstLetter && firstLetter <= 'k') {
      return 'size-10 rounded-full flex items-center justify-center font-semibold text-base bg-teal-400 border-[1.5px] border-teal-700 text-teal-900';
    } else if ('l' <= firstLetter && firstLetter <= 'p') {
      return 'size-10 rounded-full flex items-center justify-center font-semibold text-base bg-sky-400 border-[1.5px] border-sky-700 text-sky-900';
    } else if ('q' <= firstLetter && firstLetter <= 'u') {
      return 'size-10 rounded-full flex items-center justify-center font-semibold text-base bg-violet-400 border-[1.5px] border-violet-700 text-violet-900';
    } else if ('v' <= firstLetter && firstLetter <= 'z') {
      return 'size-10 rounded-full flex items-center justify-center font-semibold text-base bg-fuchsia-400 border-[1.5px] border-fuchsia-700 text-fuchsia-900';
    } else {
      return 'size-10 rounded-full flex items-center justify-center font-semibold text-base bg-grey-400 border-[1.5px] border-grey-700 text-grey-900';
    }
  }
}
