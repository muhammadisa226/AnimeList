import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-2xl font-bold md:text-3xl text-color-primary">
        {title}
      </h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="underline transition-all text-md md:text-xl text-color-primary hover:text-color-accent"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  )
}

export default Header
