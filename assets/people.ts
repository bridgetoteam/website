interface ResidentHomepageData {
  id: string
  name: string
  description: string
  descriptionJa: string
  url?: string | string[]
}
interface ResidentHomepage {
  current?: ResidentHomepageData[]
  past: ResidentHomepageData[]
  upcoming?: ResidentHomepageData[]
}

export const studioMembers: ResidentHomepage = {
  current: [
    // unnuntei
    {
      id: 'unnuntei',
      name: 'Unnuntei',
      description: `Photographer and painter unit.`,
      descriptionJa: `写真家と画家のユニット。`,
      url: 'https://www.instagram.com/unnun_sha/',
    },
    {
      id: 'lin',
      name: 'Lin Ichen',
      description: `Taipei-born painter, Japanese contemporary literature researcher.`,
      descriptionJa: `台湾・台北出身、京都芸術大学大学院博士課程在籍中。画家､日本現代文学研究。`,
      url: 'https://www.instagram.com/ichen2193/',
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
      id: 'osawa',
      name: 'Yuki Osawa',
      description: `Architect.`,
      descriptionJa: `建築家。`,
      url: 'https://www.instagram.com/osawa_opdo/',
    },
  ],
  past: [
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
      id: 'celeste',
      name: 'Celeste Gatier',
      description: `Sound artist, PhD searcher on Japanese architecture and acoustics.`,
      descriptionJa: `サウンドアーティスト、日本の建築と音響に関する博士号取得者。`,
      url: 'https://www.instagram.com/celeste.gatier/',
    },

    {
      id: 'hidemi',
      name: 'Hidemi Takagi',
      description: `Photographer, Visual artist, & Social Practitioner based in NYC`,
      descriptionJa: `ニューヨーク拠点の写真家、ビジュアルアーティスト、社会活動家。`,
      url: 'http://hidemitakagi.com/',
    },

    {
      id: 'claudia',
      name: 'Claudia Chinyere Akole',
      description: `Illustrator, animator, comic artist from Sydney, Australia.`,
      descriptionJa: `シドニー出身のイラストレーター・アニメーター・コミックアーティスト。`,
      url: 'https://claudinsky.com',
    },
  ],
  past: [
    {
      id: 'lemos',
      name: 'Lemos + Lehmann',
      description:
        'Perception, contemplation, and emotion.',
      descriptionJa: 'アーティスト・デュオ',
      url: 'https://www.lemosandlehmann.com',
    },

    {
      id: 'celineAndAliki',
      name: 'Céline Pelcé and Aliki van der Kruijs',
      description: `Food and textile designers.`,
      descriptionJa: `フードデザイナー、テキスタイルデザイナー。`,
      url: [
        'http://www.celinepelce.fr/',
        'http://www.alikivanderkruijs.com',
      ],
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
      description: `Performer and writer from London, UK.`,
      descriptionJa: `ロンドン出身のパフォーマー、ライター。`,
    },
    {
      id: 'momoko',
      name: 'Momoko Watanabe',
      description: `Dance & body expression.`,
      descriptionJa: `ダンス、身体表現。`,
    },
    {
      id: 'waldo',
      name: 'Waldo De Keersmaecker',
      description: `Architect.`,
      descriptionJa: `建築家。`,
    },
    {
      id: 'anneleen',
      name: 'Anneleen Bertels',
      description: `Textile designer.`,
      descriptionJa: `テキスタイルデザイナー。`,
    },
    {
      id: 'august',
      name: 'August Henry Moehrke',
      description: `Visual artist located in New York City.`,
      descriptionJa: `ニューヨーク拠点のビジュアルアーティスト`,
      url: 'https://www.ahm-art.com/',
    },
    {
      id: 'eliza',
      name: 'Eliza Soroga',
      description:
        'Site-Specific Performance Artist from Athens.',
      descriptionJa: 'パフォーミングアーティスト',
      url: 'http://www.elizasoroga.com/',
    },
    {
      id: 'juliette',
      name: 'Juliette Pénélope Pépin',
      description: 'Artist',
      descriptionJa: 'アーティスト',
      url: 'https://juliettepenelope.com/',
    },
    {
      id: 'taina',
      name: 'Tainá Guedes',
      descriptionJa: `ベルリン 拠点のアーティスト、フードアクティビスト、シェフ`,
      description: `Berlin-based artist, food activist, book author and trained cook.`,
      url: 'https://entretempo-kitchen-gallery.com/',
    },
    {
      id: 'harry',
      name: 'Harry Lee',
      description: 'Tea / Ceramic / Landscape artist',
      descriptionJa:
        '茶人 / 陶芸家 / ランドスケープアーティスト',
    },
    {
      id: 'misa',
      name: 'Misa Murata',
      description: 'Phytotherapist / Botanical artist',
      descriptionJa: '植物療法士／植物表現家',
      url: 'https://verseau.me/',
    },
    {
      id: 'pierre',
      name: 'Pierre Verret',
      description: 'Michelin-starred chef from Quebec.',
      descriptionJa: `ケベック出身のミシュランシェフ`,
    },
    {
      id: 'uenosono',
      name: 'Uenosono Masato',
      description: 'Architect and project director.',
      descriptionJa: `建築家・プロジェクトディレクター`,
    },
    {
      id: 'kanako',
      name: 'Kanako Shintaku',
      description: 'Visual and sculptural artist.',
      descriptionJa: `身体表現を行うアーティスト`,
      url: 'https://www.shintakukanako.com/',
    },
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
