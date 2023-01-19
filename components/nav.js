import Link from 'next/link'

export default function Nav(){
  return (
    <nav>
      <ul>
        <li>
          <Link legacyBehavior href="/pop">
            <a>POPなメニュー</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/newspaper">
            <a>ニュースペーパーのやつ</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/navi">
            <a>ナビゲーションバー</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/guriddo">
            <a>グリッドのやつ</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="three">
            <a>3段組レイアウト</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
