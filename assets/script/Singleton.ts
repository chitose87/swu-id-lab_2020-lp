export class Singleton {
  private static scrollLockTop: number;

  static scrollLock() {
    Singleton.scrollLockTop = document.documentElement.scrollTop || document.body.scrollTop;
    document.documentElement.style.position = "fixed";
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.width = "100vw";
    document.documentElement.style.height = "100vh";
    document.documentElement.style.top = `-${Singleton.scrollLockTop}px`;
  }

  static scrollUnlock() {
    document.documentElement.style.position = "";
    document.documentElement.style.overflow = "";
    document.documentElement.style.width = "";
    document.documentElement.style.height = "";
    document.documentElement.style.top = "";

    // @ts-ignore
    scrollTo({top: Singleton.scrollLockTop, behavior: "instant"});
  }
}
