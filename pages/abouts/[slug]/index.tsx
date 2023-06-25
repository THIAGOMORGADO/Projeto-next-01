import {useRouter} from 'next/router'
 
export default function SobreItem() {
  const router = useRouter();
  const {slug} = router.query;
  return(
    <div className="">
      <h2>pagina dinamica...{slug}</h2>
    </div>
  )
}