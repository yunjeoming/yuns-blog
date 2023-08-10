export default function Home() {
  return (
    <section className="max-w-post">
      <div className="flex flex-col sm:flex-row">
        <img
          src="/static/aboutme.jpeg"
          alt="aboutMe"
          className="rounded-md max-w-none w-full max-h-52 object-cover sm:w-2/5 sm:max-h-fit sm:object-contain"
        />
        <div className="px-0 py-4 sm:px-8 sm:py-0 [&>*:not(:last-child)]:mb-4">
          <h3 className="text-xl">안녕하세요! 프론트엔드 개발자 이윤정입니다 👋</h3>
          <p>
            깔끔하고 직관적인 UI를 선호합니다.
            <br />
            사용자 관점에서 제품에 다가가며 더 나은 사용자 경험을 제공하기 위한 방법을 꾸준히 고민합니다.
          </p>
          <ul className="contact">
            <li>
              <label htmlFor="my-email">Email</label>
              <a id="my-email" href="mailto:jjeongsla@gmail.com">
                jjeongsla@gmail.com
              </a>
            </li>
            <li>
              <label htmlFor="my-github">Github</label>
              <a id="my-github" href="https://github.com/yunjeoming" target="_blank">
                https://github.com/yunjeoming
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
