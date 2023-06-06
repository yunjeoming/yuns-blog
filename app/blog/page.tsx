import React from 'react';
import PostItem from '../component/PostItem';

const page = () => {
  const post = {
    title: '안녕하세요.반갑습니다람쥐~~',
    description: '이건 설명입니다.',
    date: Date.now(),
    tags: ['javascript', 'react'],
  };

  const post2 = {
    title: '안녕하세요.반갑습니다람쥐~~ 안녕하세요',
    description:
      '이건 설명입니다. 안녕하세요.반갑습니다람쥐~~ 안녕하세요.반갑습니다람쥐~~ 안녕하세요.반갑습니다람쥐~~ 안녕하세요.반갑습니다람쥐~~ 안녕하세요.반갑습니다람쥐~~ 안녕하세요.반갑습니다람쥐~~ 안녕하세요.반갑습니다람쥐~~ 안녕하세요.반갑습니다람쥐~~ 안녕하세요.반갑습니다람쥐~~ 안녕하세요.반갑습니다람쥐~~ 안녕하세요.반갑습니다람쥐~~',
    date: Date.now(),
  };

  const posts = [post, post2];
  return (
    <div className="flex-grow min-w-0">
      {posts.map((p) => (
        <PostItem key={p.title + p.date} post={p} />
      ))}
      <div>
        blog page Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio laudantium exercitationem, excepturi
        facere aspernatur tempora architecto rem, quas labore quia odio modi, pariatur autem. Expedita obcaecati ullam
        incidunt quasi facere! Laudantium quisquam ducimus magni possimus ipsa suscipit neque sint, nulla, ullam
        necessitatibus eum architecto facere quia quas exercitationem sunt, voluptatibus blanditiis perspiciatis
        explicabo minima asperiores assumenda quibusdam aperiam totam? Pariatur! Doloribus dignissimos sapiente
        recusandae accusantium quaerat. Sapiente libero amet perspiciatis iure expedita quod vitae, nulla, aperiam
        facilis aliquam velit cupiditate placeat ipsa optio eum, ratione aut et repudiandae ullam unde. Assumenda et
        saepe placeat praesentium ratione sit at tempore est obcaecati autem nisi facilis repudiandae pariatur, rem
        aperiam fugit quia vitae blanditiis ipsum odit aliquam excepturi aut. Quidem, similique impedit? Veniam, fuga
        recusandae quod nostrum deleniti odio possimus tempora facilis qui veritatis. Tempore provident vitae ut maiores
        rem, magni qui vel non quisquam nemo ab quod eum cum! Pariatur, iusto! Minus, facere dolorem? Aut reiciendis
        odio explicabo magni nostrum assumenda quis consequatur officia doloremque eius obcaecati nam reprehenderit illo
        quidem quod, ducimus laudantium! Pariatur minima error id est! Voluptates, ipsam. Temporibus quam rem quod
        molestiae architecto laborum illum dicta itaque eum. Dolorem veritatis ducimus, quo at nemo cupiditate quidem?
        Accusantium sapiente fuga nihil voluptatem aperiam minus repellendus optio magni provident! Quos repellendus
        praesentium eligendi laudantium amet id facilis, unde error optio, beatae illo sunt exercitationem aliquam,
        tempore earum minus totam tenetur. Amet culpa omnis corrupti ea magnam illo reiciendis harum? Nisi nihil,
        officiis, quia dolor culpa rem soluta perferendis facere alias delectus, ducimus porro adipisci quae inventore
        laborum doloribus officia ipsam aperiam illum dolores. Odio pariatur vel excepturi molestiae et! Ad vel est
        explicabo, ea obcaecati cupiditate, fugit totam harum et sit ducimus, quaerat debitis fuga iure incidunt quae
        architecto quas veniam maxime tenetur dolore exercitationem officiis. Unde, qui facilis. Enim nam dolor eaque
        saepe possimus officia asperiores sint natus debitis nostrum illo necessitatibus iste, cum, pariatur dolorem.
        Voluptatibus dolorem laboriosam cumque fuga dolorum maxime soluta consequatur autem nisi aut! Praesentium eaque
        eveniet suscipit atque amet ad aliquam, obcaecati, eligendi minus itaque culpa vel similique totam vero,
        accusantium quisquam ipsa nisi. Enim aperiam architecto esse qui cupiditate labore quis illo. Culpa harum alias
        dolorum voluptas ad assumenda tempora accusantium eveniet vero, nobis, ipsa sed quod amet odit. Magni, laborum
        mollitia maiores culpa numquam eius fugit provident porro in dolorum corporis? Exercitationem placeat
        consectetur id architecto fugiat, earum, aut nemo eveniet unde dolore, voluptates repellat ad labore. Dolor
        suscipit corrupti reprehenderit nostrum, alias sunt voluptatum porro minus modi optio quod qui! Facere, velit
        beatae quis, hic doloribus cupiditate voluptas corrupti nisi quod provident sit perferendis. Accusamus modi
        facere temporibus eligendi! Deleniti eligendi quae quisquam illo provident doloremque ipsum eius voluptatem
        reiciendis! Recusandae, totam consectetur autem cupiditate fugiat voluptates sequi ex iste temporibus ea sit!
        Fugit cupiditate officia quisquam quas doloribus similique autem corporis, eos saepe aperiam nesciunt illo.
        Iste, ipsa ea. Ea, cum quae praesentium molestiae natus beatae ducimus maxime aut quas corrupti veritatis
        accusamus laboriosam amet id sequi quo reprehenderit soluta similique eum fuga harum eveniet velit. Nihil,
        pariatur aliquid. Quidem, libero vitae eos, earum tempora alias placeat tempore deleniti voluptates impedit
        aliquam non blanditiis provident aspernatur repellendus incidunt dolore dignissimos adipisci. Suscipit nisi
        minima debitis, quia sint aperiam dolores. Laboriosam nesciunt tempora ipsa, reiciendis maiores nobis voluptates
        culpa quos, voluptatem blanditiis dolore temporibus odit quas! Laudantium deleniti, ab nam illum asperiores
        temporibus, ipsum est ratione aperiam, dolorum id magnam. Doloremque expedita minima magnam maiores eum. Culpa
        magnam praesentium velit rerum quisquam nam numquam, voluptates sapiente nihil quis inventore id atque corporis
        dolorum, asperiores laudantium corrupti, sed rem neque vel. Molestiae ipsa atque eos, pariatur expedita omnis!
        Quod minus molestias tenetur adipisci, repudiandae porro deleniti incidunt hic placeat quia saepe! Cumque iusto
        consectetur laboriosam perferendis quia aliquam excepturi, exercitationem vel. Dolorem, optio? Tenetur suscipit
        aliquam, at sunt tempora fugiat natus optio exercitationem perferendis et nam adipisci temporibus accusantium
        beatae distinctio itaque! Iusto fugit unde, voluptates magni enim accusamus esse aspernatur. Eveniet deleniti
        minima, adipisci consequatur aliquid totam dicta a autem ut iure molestiae ex quaerat laborum accusamus non.
        Beatae magni debitis aperiam doloremque tenetur autem officia ipsam et sint placeat. Incidunt laborum officiis
        maiores suscipit id a saepe tempora optio similique consequuntur ratione nihil vel corporis quos nostrum
        consectetur sequi, nam, doloribus soluta quasi labore? Porro inventore aperiam iste repudiandae? Blanditiis fuga
        tempore perspiciatis iusto, aperiam dicta eaque harum quisquam distinctio repudiandae facilis sint, nulla alias,
        laboriosam in? Inventore nisi soluta reiciendis maiores necessitatibus earum tempora. Obcaecati modi at
        architecto! Tenetur quod nulla harum voluptate dolorem consectetur, sequi assumenda praesentium unde culpa
        cumque ipsa aspernatur sed neque molestias, nostrum qui molestiae doloremque sit alias veniam aperiam minima
        omnis! Dolore, facilis? Omnis est repudiandae, dicta fugiat tempore quaerat fuga et nemo magnam nulla, animi
        recusandae distinctio iure accusamus nesciunt facilis, delectus minus accusantium earum laudantium quisquam id
        esse! Laborum, minus itaque? Eum assumenda vero ab exercitationem deserunt reprehenderit aliquid eaque,
        veritatis maxime aperiam doloribus quaerat perferendis deleniti fugit veniam. Totam nemo temporibus ipsum
        aliquid rem esse ratione perspiciatis saepe atque at! Nemo mollitia aut, quisquam delectus iusto repellat
        veritatis est! Doloremque eligendi voluptas aperiam vitae vero molestiae ullam, enim minus numquam? Dolor velit
        modi, earum voluptatibus tempore maiores. Nobis, repudiandae veniam? Odio animi, illum a optio eos ducimus,
        impedit porro quos, repellendus in perferendis mollitia. Accusantium, molestias ea. Optio, suscipit esse.
        Laudantium ab neque nemo perferendis, illo ipsam doloremque aspernatur quisquam.
      </div>
    </div>
  );
};

export default page;
