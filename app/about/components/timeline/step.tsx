export default function Step({ title, children }) {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-600 dark:text-green-400">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2427L17.6568 9.1716L16.2426 7.75739L10.5858 13.4142Z"
              fill="currentColor"
            />
          </g>
        </svg>
        <p className="text-neutral-900 dark:text-neutral-100">{title}</p>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 ml-6">{children}</p>
    </li>
  );
}
