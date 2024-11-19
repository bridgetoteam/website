interface ResidentHomepage {
  current?: ResidentData[]
  past: ResidentData[]
  upcoming?: ResidentData[]
}

export const studioMembers: ResidentHomepage = {
  current: [
    {
      id: 'lin',
      name: 'Lin Ichen',
      description: `Taipei-born painter, Japanese contemporary literature researcher.`,
      descriptionJa: `台湾・台北出身、京都芸術大学大学院博士課程在籍中。画家､日本現代文学研究。`,
      url: 'https://www.instagram.com/ichen2193/',
    },
    {
      id: 'hmw',
      name: 'Hand Made Works',
      description: `Leather artists.`,
      descriptionJa: `革職人。`,
      url: 'https://at0.handcrafted.jp/',
    },
    {
      id: 'teo',
      name: 'Teo Knives',
      description:
        'A clinical psychologist working with mindfulness / tea ceremony and ikebana artist',
      descriptionJa:
        '臨床心理学者、茶道とイケバナのアーティスト',
      url: 'https://teo.knives.li/',
    },
    {
      id: 'ian',
      name: 'Ian Knives',
      description:
        'Japanese poet writing in Russian, white-hat hacker.',
      descriptionJa:
        'ロシア語で書いている日本詩人、白帽ハッカー。',
      url: 'https://t.me/s/iannoshi',
    },
    {
      id: 'kawasaki',
      name: 'Mineo Kawasaki',
      description: 'Drummer and composer.',
      descriptionJa: 'ドラマー、ビートメイカー',
      url: 'https://linktr.ee/mineo_kawasaki',
    },
    {
      id: 'osawa',
      name: 'Yuki Osawa',
      description: `Architect.`,
      descriptionJa: `建築家。`,
      url: 'https://www.instagram.com/osawa_opdo/',
    },
  ],
  past: [
    {
      id: 'unnuntei',
      name: 'Unnuntei',
      description: `Photographer and painter unit.`,
      descriptionJa: `写真家と画家のユニット。`,
      url: 'https://www.instagram.com/unnun_sha/',
    },
    {
      id: 'colin',
      name: 'Colin Zimbleman',
      description: `A clinical psychologist working with images.`,
      descriptionJa: `臨床心理学者`,
      url: 'http://www.zimbleman.com/',
    },
    {
      id: 'martin',
      name: 'Martin De Mello',
      description: `A poet, short fiction writer and editor based in Glasgow.`,
      descriptionJa: `グラスゴー拠点の詩人、短編小説家、編集者。`,
    },
    {
      id: 'marie',
      name: 'Marie Østerskov',
      description: `Natural dye artist.`,
      descriptionJa: `天然染色アーティスト。`,
    },
  ],
}

export const residents: ResidentHomepage = {
  upcoming: [
    {
      id: 'konstanze',
      name: 'Konstanze Stoiber',
      description: `Artist and PhD candidate.
      Konstanze draws upon references of fallen systems, dissecting the remnants of monarchial and religious structures. An analysis of extremes - sublimity and violence in power structures and their self-contradictory nature.`,
      descriptionJa: `アーティスト、博士号候補
      彼女は、崩壊したシステムを参照し、君主制や宗教構造の残滓を解剖する。権力構造に潜む崇高さと暴力、そしてそれが内包する矛盾について分析する。`,
      url: 'https://konstanzestoiber.com/',
    },
    {
      id: 'karien',
      name: 'Karien Vandekerkhove',
      description: `Belgian photographer and visual artist.
      Her body of work encompasses photography, installations, paintings and small scale models, generating ‘a sense of absence’ through spiritual- and meditative compositions.`,
      descriptionJa: `ベルギー出身の写真家でビジュアル・アーティスト。
      彼女の作品は、写真、インスタレーション、絵画、小規模な模型を含み、スピリチュアルで瞑想的な構図を通して「不在の感覚」を生み出している。`,
      url: 'https://karienvandekerkhove.mypixieset.com/',
    },
    {
      id: 'tsai',
      name: 'Tsai Shih-Hsiang',
      description: `Co-founder of the art collective “Hyper Wave" in Taiwan.  
      Tsai’s works often use video and photography to contemplate the city, landscapes, and the people toiling within them, or to document processes of drifting, shifting, and transcending the identity.`,
      descriptionJa: `台湾にあるアートコレクティブ「Hyper Wave」の創始者。作品はビデオや写真を使って、都市や風景、その中で働く人々について考えたり、漂流や移動、アイデンティティの超越のプロセスを記録したりする。`,
      url: 'https://www.tsaishihhsiang-artstudio.com/',
    },
  ],
  past: [
    {
      id: 'tony',
      name: 'Tony Jouanneau',
      description: `A textile designer, craftsman and researcher. 
      Founded Atelier Sumbiosis, a textile+science laboratory, including experimenting with microalgae dyeing, patterns devoured by insects, or bacterial printing on fabrics.`,
      descriptionJa: `テキスタイルデザイナー、工芸者、研究者。`,
      url: 'https://www.atelier-sumbiosis.com',
    },
    {
      id: 'claudia',
      name: 'Claudia Chinyere Akole',
      description: `Illustrator, animator, comic artist from Sydney, Australia.`,
      descriptionJa: `シドニー出身のイラストレーター・アニメーター・コミックアーティスト。`,
      url: 'https://claudinsky.com',
    },
    {
      id: 'hidemi',
      name: 'Hidemi Takagi',
      description: `A photographer, visual artist, & social practitioner based in NYC.
      During her residency, she curated and exhibited photographs of teenagers with Asian (primarily Japanese) roots that she has taken over the years, inviting guests to consider their own perspectives on identity.`,
      descriptionJa: `ニューヨーク拠点の写真家、ビジュアルアーティスト、社会活動家。
      今回、Bridge Studioで、彼女がこれまで撮影したアジア（主に日本）にルーツがある10代若者の写真をキュレーションし、展示を開催しました。`,
      url: 'http://hidemitakagi.com/',
      showProject: true,
      projectAlbumUrl:
        'https://photos.app.goo.gl/uNwkPbjRamQNhEF1A',
    },

    {
      id: 'celeste',
      name: 'Celeste Gatier',
      description: `Sound artist, PhD researcher on Japanese architecture and acoustics.
      She developed a DIY electronic sound device using "paper circuits", creating delicate electronic sounds by folding, bending, and stroking paper, drawing inspiration from origami, shoji, and fusuma of Japanese architecture, inspired by Junichiro Tanizaki's "In-ei Raisan".`,
      descriptionJa: `サウンドアーティスト、日本の建築と音響に関する博士号取得者。
      「紙の回路」を使った、DIY電子音デバイスを開発。紙を折ったり、曲げたり、撫でたりすることで繊細な電子音を生み出すもので、折り紙や日本建築の障子、襖、谷崎潤一郎の『陰翳礼讃』などから着想を得ています。`,
      url: 'https://www.instagram.com/celeste.gatier/',
      showProject: true,
      projectAlbumUrl:
        'https://photos.app.goo.gl/6tCnKRE4JDv9Bk1g7',
    },

    {
      id: 'lemos',
      name: 'Lemos + Lehmann',
      description: `An artist duo focusing on perception, contemplation, and emotion.
        In addition to holding a listening session for SOLSTICE, their limited-edition sound art piece that captures the spiritual cycle of winter in Iceland, they created a space that invited guests to meditate on what comes after life.`,
      descriptionJa: `知覚、瞑想、感情に焦点を当てたアーティストデュオ。
      アイスランドの冬の精神的なサイクルを捉えた限定版サウンドアート作品「SOLSTICE」のリスニングセッションを開催するだけでなく、来客に人生のその先について瞑想する空間を創り上げました。`,
      url: 'https://www.lemosandlehmann.com',
      showProject: true,
      projectAlbumUrl:
        'https://photos.app.goo.gl/orSHSCvycjXpWSXu7',
    },

    {
      id: 'celineAndAliki',
      name: 'Céline Pelcé and Aliki van der Kruijs',
      description: `A pair of food and textile designers.
      Alongside open events involving water tastings, free-association, and reflection, they organized a performance along the Kamo River, inviting the participants to embrace the presence of water.`,
      descriptionJa: `フードデザイナー、テキスタイルデザイナー。
      水のテイスティング、フリーアソシエーション、リフレクションを含むオープンイベントに加え、鴨川沿いでのパフォーマンスを企画し、参加者に水の存在を受け入れるよう促しました。`,
      url: [
        'http://www.celinepelce.fr/',
        'http://www.alikivanderkruijs.com',
      ],
      showProject: true,
      projectAlbumUrl:
        'https://photos.app.goo.gl/TGFTGjiJAYZwg5887',
    },

    {
      id: 'vincent',
      name: 'Vincent Collet',
      description: `Author-director, performer and visual artist.`,
      descriptionJa: `ディレクター、パフォーマー、ビジュアルアーティスト。`,
      url: 'http://www.theatre-airelibre.fr/',
    },

    {
      id: 'jasmine',
      name: 'Jasmine Shigemura Lee',
      description: `A performer and writer from London, UK.
      She created and performed an original Butoh performance utilizing the architecture of Bridge Studio, using custom-made props and sounds to explore transformation and transcendence.`,
      descriptionJa: `ロンドン出身のパフォーマー、ライター。`,
      showProject: true,
      projectAlbumUrl:
        'https://photos.app.goo.gl/AxewnGvQinnWozh97',
    },

    {
      id: 'august',
      name: 'August Henry Moehrke',
      description: `Visual artist located in New York City.
      August has held multiple exhibitions in Bridge Studio, his latest being "Koyo", which illuminated the autumnal world on painted lanterns, inviting guests to meditate with the fleeting foliage. Previous shows also include "Hanami", exploring the ephemeral beauty of cherry blossoms, and his "Monster Hunter" exploration  into the creation of identity.`,
      descriptionJa: `ニューヨーク拠点のビジュアルアーティスト。`,
      url: 'https://www.augusthenry.com/',
      showProject: true,
      projectAlbumUrl:
        'https://photos.app.goo.gl/HrRhMd9dQ9XWLVHv8',
    },

    {
      id: 'momoko',
      name: 'Momoko Watanabe',
      description: `A Japanese artist focusing on dance & body expression.
      She carried out a unique project in which she attempted (successfully) to survive in Kyoto for one month without spending any money whatsoever, trading work, favors, and goodwill for food and life supplies.`,
      descriptionJa: `ダンス、身体表現。`,
      projectAlbumUrl:
        'https://www.instagram.com/nomoney_momoko/',
      showProject: true,
    },
    // {
    //   id: 'waldo',
    //   name: 'Waldo De Keersmaecker',
    //   description: `Architect.`,
    //   descriptionJa: `建築家。`,
    // },
    // {
    //   id: 'anneleen',
    //   name: 'Anneleen Bertels',
    //   description: `Textile designer.`,
    //   descriptionJa: `テキスタイルデザイナー。`,
    // },

    {
      id: 'eliza',
      name: 'Eliza Soroga',
      description: `A site-specific performance artist from Athens.
        Eliza hosted a "performance architecture" workshop, inviting the people of Jodoji to playfully explore the relationship between the body and the built spaces around them.`,
      descriptionJa: 'パフォーミングアーティスト。',
      url: 'http://www.elizasoroga.com/',
      showProject: true,
      projectAlbumUrl:
        'https://photos.app.goo.gl/MsT4kyW3MpUJR4df8',
    },

    {
      id: 'juliette',
      name: 'Juliette Pénélope Pépin',
      description: `Artist and researcher.
      As part of her residency, Juliette created a kit to construct papercraft frogs, and invited guests from the neighborhood to build and paint their own. The creations were then 3D-scanned and used as part of a larger digital environment.`,
      descriptionJa: `ペーパークラフトアーティスト、研究者。`,
      url: 'https://juliettepenelope.com/',
      projectAlbumUrl:
        'https://photos.app.goo.gl/fDYNbMjqTyCFnoXt5',
      showProject: true,
    },
    // {
    //   id: 'taina',
    //   name: 'Tainá Guedes',
    //   descriptionJa: `ベルリン 拠点のアーティスト、フードアクティビスト、シェフ`,
    //   description: `Berlin-based artist, food activist, book author and trained cook.`,
    //   url: 'https://entretempo-kitchen-gallery.com/',
    // },

    {
      id: 'harry',
      name: 'Harry Lee',
      description: `Tea / Ceramic / Landscape artist.
      Harry hosted a "Mystic Tea House", reinvigorating an abandoned machiya with a uniquely curated tea ceromony held amongst a grove of bamboo growing up through the floorboards.`,
      descriptionJa:
        '茶人 / 陶芸家 / ランドスケープアーティスト',
      showProject: true,
      projectAlbumUrl:
        'https://photos.app.goo.gl/J7BEmxqPU2nTMMd77',
    },

    // {
    //   id: 'misa',
    //   name: 'Misa Murata',
    //   description: 'Phytotherapist / Botanical artist',
    //   descriptionJa: '植物療法士／植物表現家',
    //   url: 'https://verseau.me/',
    // },
    // {
    //   id: 'pierre',
    //   name: 'Pierre Verret',
    //   description: 'Michelin-starred chef from Quebec.',
    //   descriptionJa: `ケベック出身のミシュランシェフ`,
    // },
    // {
    //   id: 'uenosono',
    //   name: 'Uenosono Masato',
    //   description: 'Architect and project director.',
    //   descriptionJa: `建築家・プロジェクトディレクター`,
    // },
    // {
    //   id: 'kanako',
    //   name: 'Kanako Shintaku',
    //   description: 'Visual and sculptural artist.',
    //   descriptionJa: `身体表現を行うアーティスト`,
    //   url: 'https://www.shintakukanako.com/',
    // },

    {
      id: 'eva',
      name: 'Eva Ešnerová',
      description: `Urban strategic planner and researcher from Prague, Czechia.`,
      descriptionJa: `チェコ出身の都市戦略プランナー`,
      url: 'https://camp.ofcn.cz/en/index.html',
    },
  ],
}

// {
//   id: 'severin',
//   name: 'Studio B Severin',
//   description:
//     'Berlin-based design studio exploring culture and society.',
//   descriptionJa: `ベルリン拠点のデザインスタジオ`,
//   url: 'https://studiobseverin.com/',
// },
// {
//   id: 'cleo',
//   name: 'Cléo Verstrepen',
//   description: `Graduate in cultural studies preparing research community art spaces.`,
//   descriptionJa: `コミュニティ・アート・スペースのリサーチャー`,
//   url: 'https://www.instagram.com/cleoverstrepen/',
// },
