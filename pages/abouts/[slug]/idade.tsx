import {useRouter} from 'next/router'
 
export default function SobreItem() {
  const router = useRouter();
  const {slug} = router.query;
  return(
    <div className="">
      <h2>{slug} tem 90 anos</h2>
    </div>
  )
}