export interface Projects {
  title: string;
  description: string;
  url: string;
  tags: string[];
}

export const projects: Projects[] = [
  {
    title: 'Sugimotos',
    description: '私が現在開発を進めている自作OSです。Cで開発しています。現在はブートローダーとカーネルの開発を進めています。',
    url: 'https://github.com/sugimoto-blyukher/sugimotos',
    tags: ['OS', 'C', 'Kernel']
  },
  {
    title: 'アジプロジェネレーター',
    description: '私が作ったソ連風のアジプロ文を生成するサイトです。(今はもう使えない)',
    url: 'null',
    tags: ['Python', 'FastAPI', 'GeminiAPI']
  },
]
