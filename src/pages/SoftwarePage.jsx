import { Link } from "react-router-dom";

const competencies = [
  {
    title: "AI Automation",
    description:
      "Proprietary LLM integrations and neural networks that automate complex operational workflows.",
    link: { label: "EXPLORE AI", to: "/intermediary" },
  },
  {
    title: "Intelligent Design",
    description:
      "User-centric UX/UI patterns that bridge the gap between human intuition and machine logic.",
    link: { label: "VIEW DESIGNS", to: "/intermediary" },
  },
];

const techStack = [
  {
    name: "React.JS",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z" />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.983 7.647 4.983l.006 2.055h4.363v.617H5.92S3 7.283 3 11.758s2.555 4.317 2.555 4.317h1.524v-2.078s-.082-2.555 2.513-2.555zm-.274-5.856a.823.823 0 110-1.647.823.823 0 010 1.647zM14.415 12.308h-4.328s-2.432-.039-2.432 2.35v3.951S7.286 21 12.064 21c4.574 0 4.289-1.983 4.289-1.983l-.006-2.055h-4.363v-.617h6.097S21 16.717 21 12.242s-2.555-4.317-2.555-4.317h-1.524v2.078s.082 2.555-2.513 2.555zm.274 5.856a.823.823 0 110 1.647.823.823 0 010-1.647z" />
      </svg>
    ),
  },
  {
    name: "TensorFlow",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-3.053 1.78V5.856zm21.416 0L12.46 0v24l4.095-2.378V7.603l3.053 1.78V5.856z" />
      </svg>
    ),
  },
  {
    name: "AWS Cloud",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.296.072-.583.16-.863.272a2.287 2.287 0 01-.28.104.488.488 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 011.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.17c-.048.16-.104.264-.168.312a.549.549 0 01-.312.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.272-.15.32-.065.056-.177.088-.32.088zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.216-.151-.248-.223a.56.56 0 01-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.151-.415-.287-.806-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 01-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415a3.56 3.56 0 011.005-.136c.176 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 01.24.2.43.43 0 01.071.263v.375c0 .168-.064.256-.184.256a.83.83 0 01-.303-.096 3.652 3.652 0 00-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.694 0 .224.08.416.24.567.159.152.454.304.87.44l1.133.358c.574.184.99.44 1.237.767.248.328.375.702.375 1.118 0 .344-.072.655-.207.926-.144.272-.336.51-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.607z" />
        <path d="M22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.216.184-.423.088-.327-.151.319-.79 1.03-2.57.695-2.994z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.128 0a10.134 10.134 0 00-2.755.403l-.063.02A10.922 10.922 0 0012.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.14.403 2.804.775 1.814 1.82.827 2.865.305 4.482.415 6.682c.03.607.203 1.597.49 2.879s.69 2.783 1.193 4.152c.503 1.37 1.054 2.6 1.915 3.436.43.419.962.694 1.553.694.425 0 .894-.154 1.39-.535.204-.157.4-.34.59-.55l.002.002c.467.475 1.02.678 1.556.678h.007c.478-.001.923-.192 1.318-.486a3.503 3.503 0 00.063.391l.05.209c.08.327.18.638.31.904.067.136.146.28.25.414.104.134.245.278.435.372a1.19 1.19 0 00.553.104c.214-.011.412-.088.59-.201.39-.249.67-.636.869-1.01.198-.374.354-.768.49-1.195l.031-.1c.016.11.035.218.058.323.098.467.276.9.577 1.213.3.312.726.495 1.2.437.376-.046.675-.257.896-.545.221-.287.383-.65.497-1.063.186-.672.266-1.509.283-2.528l.021-.388c.02.021.04.043.062.063.463.431 1.07.644 1.575.644a1.24 1.24 0 00.586-.141c.38-.193.614-.536.79-.935.35-.79.493-1.896.525-3.086.018-.68-.006-1.39-.048-2.065a31.857 31.857 0 00-.089-1.117 8.704 8.704 0 001.573-2.18c.339-.672.56-1.396.56-2.158 0-.258-.025-.515-.072-.768C22.295 1.333 19.865 0 17.128 0z" />
      </svg>
    ),
  },
  {
    name: "Node.JS",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 00.272 0l8.795-5.076a.277.277 0 00.134-.238V6.921a.28.28 0 00-.137-.242L12.135 1.6a.272.272 0 00-.27 0L3.078 6.68a.281.281 0 00-.139.241v10.15a.27.27 0 00.136.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.55l-2.307-1.33A1.85 1.85 0 011.355 17.07V6.921c0-.68.362-1.313.953-1.652L11.1.191a1.926 1.926 0 011.846 0l8.794 5.078c.588.34.952.972.952 1.652v10.15c0 .68-.364 1.31-.952 1.649l-8.794 5.076a1.834 1.834 0 01-.924.247z" />
      </svg>
    ),
  },
  {
    name: "C#",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.5 15.97l.41 2.44c-.26.14-.68.27-1.24.39-.57.13-1.24.2-2.01.2-2.21 0-3.9-.68-5.1-2.04C2.35 15.6 1.75 13.81 1.75 11.6c0-2.36.69-4.27 2.07-5.74C5.2 4.38 6.96 3.64 9.12 3.64c.73 0 1.37.08 1.9.22.54.14.99.32 1.37.53l-.65 2.41c-.33-.16-.7-.3-1.09-.41a4.75 4.75 0 00-1.36-.19c-1.26 0-2.25.46-2.96 1.38-.71.91-1.06 2.16-1.06 3.73 0 1.5.33 2.68 1 3.53.66.86 1.58 1.29 2.76 1.29.53 0 1.04-.07 1.52-.2.49-.13.91-.31 1.27-.55zm6.5 0l.41 2.44c-.26.14-.68.27-1.24.39-.57.13-1.24.2-2.01.2-2.21 0-3.9-.68-5.1-2.04-1.21-1.36-1.81-3.15-1.81-5.36 0-2.36.69-4.27 2.07-5.74C11.7 4.38 13.46 3.64 15.62 3.64c.73 0 1.37.08 1.9.22.54.14.99.32 1.37.53l-.65 2.41c-.33-.16-.7-.3-1.09-.41a4.75 4.75 0 00-1.36-.19c-1.26 0-2.25.46-2.96 1.38-.71.91-1.06 2.16-1.06 3.73 0 1.5.33 2.68 1 3.53.66.86 1.58 1.29 2.76 1.29.53 0 1.04-.07 1.52-.2.49-.13.91-.31 1.27-.55z" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
      </svg>
    ),
  },
  {
    name: "Prisma",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.807 18.285L13.553.756a1.324 1.324 0 00-1.129-.754 1.31 1.31 0 00-1.206.626l-8.952 14.5a1.356 1.356 0 00.016 1.455l4.376 6.778a1.408 1.408 0 001.58.581l12.703-3.757c.389-.115.707-.39.873-.755s.164-.783-.007-1.145zm-1.848.752L9.18 22.224a.452.452 0 01-.575-.52l3.85-18.438c.072-.345.549-.4.699-.08l7.129 15.138a.515.515 0 01-.324.713z" />
      </svg>
    ),
  },
  {
    name: "Next.JS",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.66-.108.854-.108 1.748s.012 1.089.108 1.748c.652 4.507 3.86 8.293 8.209 9.696.779.251 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.172l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.894-.012-1.089-.108-1.748-.652-4.507-3.86-8.293-8.209-9.696a12.597 12.597 0 00-2.498-.523A33.119 33.119 0 0011.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 01.237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 01.233-.296c.096-.05.13-.054.5-.054z" />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 0011.694.013a6.04 6.04 0 00-5.772 4.206 5.984 5.984 0 00-3.935 2.911 6.05 6.05 0 00.749 7.11 5.98 5.98 0 00.51 4.911 6.05 6.05 0 006.515 2.9A6.07 6.07 0 0013.32 24a6.04 6.04 0 005.772-4.206 5.98 5.98 0 003.935-2.911 6.05 6.05 0 00-.745-7.062zM13.32 22.445a4.52 4.52 0 01-2.898-1.05l.144-.083 4.81-2.777a.783.783 0 00.395-.678v-6.788l2.033 1.174a.072.072 0 01.04.056v5.614a4.543 4.543 0 01-4.524 4.532zm-9.72-4.154a4.51 4.51 0 01-.54-3.032l.144.084 4.81 2.777a.782.782 0 00.786 0l5.876-3.393v2.349a.072.072 0 01-.029.062l-4.866 2.81a4.543 4.543 0 01-6.18-1.657zm-1.268-10.56a4.51 4.51 0 012.36-1.985l-.001.168v5.554a.78.78 0 00.392.676l5.876 3.394-2.033 1.174a.072.072 0 01-.069.006l-4.866-2.813a4.543 4.543 0 01-1.66-6.174zm16.688 3.882l-5.876-3.393 2.033-1.174a.072.072 0 01.069-.006l4.866 2.812a4.536 4.536 0 01-.699 8.19v-5.751a.78.78 0 00-.393-.678zm2.024-3.048l-.144-.083-4.81-2.777a.782.782 0 00-.786 0l-5.876 3.393V7.55a.072.072 0 01.029-.062l4.866-2.81a4.538 4.538 0 016.72 4.702zM8.498 13.97l-2.033-1.174a.072.072 0 01-.04-.056V7.126a4.538 4.538 0 017.441-3.487l-.144.083-4.81 2.777a.783.783 0 00-.395.678zm1.104-2.383l2.616-1.511 2.616 1.511v3.022l-2.616 1.511-2.616-1.511z" />
      </svg>
    ),
  },
  {
    name: "LangChain",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 6l1.5 2.5H10.5L12 6zM12 18l-1.5-2.5h3L12 18zM6 12l2.5-1.5v3L6 12zM18 12l-2.5 1.5v-3L18 12z" />
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.186.186 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.186.186 0 00-.185-.186H5.136a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.186.186 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z" />
      </svg>
    ),
  },
  {
    name: "React Native",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z" />
      </svg>
    ),
  },
];

const SoftwarePage = () => {
  return (
    <div className="bg-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-block mb-6">
                <span className="text-secondary text-xs font-medium tracking-wider uppercase border border-secondary/40 rounded-full px-4 py-1.5">
                  Future Ready Engineering
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Architecting the
                <br />
                <span className="text-secondary italic">Future of SaaS</span>
              </h1>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
                AI-native product development at the speed of thought. We build
                high-fidelity tech ecosystems for the next generation of
                industry leaders.
              </p>

              <div className="flex items-center gap-5 flex-wrap">
                <Link
                  to="/contact"
                  className="bg-secondary hover:bg-secondary/90 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm flex items-center gap-2"
                >
                  Start Your Project
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
                <Link
                  to="/intermediary"
                  className="text-white/70 hover:text-white text-sm font-medium transition-colors flex items-center gap-2"
                >
                  View Ecosystem
                </Link>
              </div>
            </div>

            {/* Right - Image with floating cards */}
            <div className="relative">
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-900/40 via-green-800/20 to-primary flex items-center justify-center">
                  <svg
                    className="w-32 h-32 text-green-600/40"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
                  </svg>
                </div>

                {/* Floating stat card - top right */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2">
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">
                    Processing
                  </p>
                  <p className="text-white text-sm font-bold">
                    99.2% Accuracy
                  </p>
                </div>

                {/* Floating stat card - bottom right */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 flex items-center gap-2">
                  <div className="w-5 h-5 bg-secondary/20 rounded flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium">
                    Fully Optimized
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-14">
            Core Competencies
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Left - Large visual card */}
            <div className="md:col-span-2 md:row-span-2 bg-white/5 border border-white/10 rounded-xl p-6 relative overflow-hidden min-h-[360px] flex flex-col justify-end">
              <div className="absolute top-6 left-6 w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>

              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                ></div>
              </div>
            </div>

            {/* Top right - AI Automation */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-secondary/40 transition-colors">
              <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-base mb-2">
                AI Automation
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                Proprietary LLM integrations and neural networks that automate
                complex operational workflows.
              </p>
              <Link
                to="/intermediary"
                className="inline-flex items-center gap-1.5 text-secondary text-xs font-semibold uppercase tracking-wider hover:gap-2.5 transition-all"
              >
                Explore AI
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Bottom right - Intelligent Design */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-secondary/40 transition-colors">
              <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-base mb-2">
                Intelligent Design
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                User-centric UX/UI patterns that bridge the gap between human
                intuition and machine logic.
              </p>
              <Link
                to="/intermediary"
                className="inline-flex items-center gap-1.5 text-secondary text-xs font-semibold uppercase tracking-wider hover:gap-2.5 transition-all"
              >
                View Designs
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Custom SaaS Engineering - full width below */}
          <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-6 hover:border-secondary/40 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-base mb-2">
                  Custom SaaS Engineering
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                  Scalable, enterprise-grade cloud architectures designed for
                  high-performance and seamless expansion. We specialize in
                  microservices and distributed computing.
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  {["Architecture", "Scaling", "DevOps"].map((tag) => (
                    <span
                      key={tag}
                      className="text-white/50 text-xs font-medium border border-white/10 rounded-full px-3 py-1 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-y border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-xs uppercase tracking-widest text-center mb-8">
            Engineered With Global Standards
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-2 text-white/40 hover:text-secondary transition-colors cursor-default"
              >
                {tech.icon}
                <span className="text-xs font-medium tracking-wider uppercase">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to build the{" "}
            <span className="text-secondary italic">unimaginable</span>?
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed mb-10">
            Join the ecosystem of visionary companies building their future on
            NextLynx intelligence.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-secondary hover:bg-secondary/90 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Start Your Project
            </Link>
            <Link
              to="/contact"
              className="border border-white/30 hover:border-white/60 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwarePage;
