export class SessionDto {
  private _sessionKey:string;

  constructor(sessionKey: string) {
    this._sessionKey = sessionKey;
  }

  get sessionKey(): string {
    return this._sessionKey;
  }
}
