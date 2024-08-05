<>
/**Esse é o segundo projeto do Next dentro do curso
 * de React, começa na aula 417, mas copiei o arquivo
 * que eu já tinha começado do curso de next
 * É um site de avaliação de comida
 */
/**Dentro do que já foi explicado antes, dentro do
 * app criou a pasta meals e dentro a página page.js e layout.js,
 * mas também a pasta meals e dentro outra página page.js,
 * pois assim é q se criam as páginas do site, também criou a pasta
 * [mealSlug] para setar dinamicamente e dentro outra page.js
 * Dentro da page principal q fica dentro do app foram criados
 * links para cada */

<p><Link href="/meals">Meals</Link></p>
<p><Link href="/meals/share">Share Meals</Link></p>
<p><Link href="/community">Community</Link></p>
/**Na aula 420 é explicado q mesmo havendo um layout (css)
 * principal, pode-se criar um outro para componentes específicos
 * dentro da pasta destes, mas o geral ainda será aplicado,
 * foi criado um de exemplo dentro do meals q depois foi deletado
 */
export default function MealsLayout({children}) {
    <>
    <p>Meals Layout</p>
    {children}
    </>
}
/**aula 421 cria o componente main-header, um header padrão
 * com uma imagem e alguns links, ele foi guardado dentro
 * da pasta components. A novidade aqui é a imagem
 * que tem q ser importada com .src e que para aparecer
 * o componente foi importado para o layout.js que, pelo
 * que entendi, funciona como App.js... vou ver com o 
 * resto do código, mas ele já aparece em todas as páginas */
/**Aula 422 aplica o module.css ao main-header que é o
 * que já expliquei anteriormente no curso, cria-se um arquivo
 * com o mesmo nome + .module.css e no arquivo principal
 * fica com a sintaxe abaixo */

import classes from './main-header.module.css'
return <header className={classes.header}></header>

/*já no arquivo main-header.module.css fica assim*/
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1rem;
  }
/**aula 423 fala sobre a tag Image do Next ao invés da img, com a vantagem
 * de já ter o lazy loading q garante q a imagem só é mostrada após totalmente
 * carregada e já trazer o tamanho da imagem, o priority para carregar com prioridade
 * Além de várias outras q tem ver na documentação*/

    /**aula 423 fala sobre a tag Image do Next ao invés da img, com a vantagem
     * de já ter o lazy loading q garante q a imagem só é mostrada após totalmente
     * carregada e já trazer o tamanho da imagem, o priority para carregar com prioridade
     * Além de várias outras q tem ver na documentação*/
    <Image src={logoImg} alt="a plate with food on it" priority />
    
/*aula 424 só reorganizou o código, separando o background em um elemento próprio,
* criando um CSS para ele, atualizando os imports, passando-o para o main-header
* que, por sua vez, é passado para o layout. Unica coisa diferente é essa importação
* que teve q ser assim feita por causa do traço */
    <div className={classes['header-background']}></div>
  
  /**Na aula 426 é inserido o código para inserir imagens na tela, 
   * no image-slideshow.js, aqui foi feita a lógica para mudar a imagem a cada
   * 5 segundos, reparar na organização do componente, com todos os imports,
   * depois, todas as imagens em um array e a lógica abaixo usando o comprimento e
   * o índice do array para fazer o slide.*/

  export default function ImageSlideshow() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex < images.length - 1 ? prevIndex + 1 : 0
        );
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className={classes.slideshow}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.image}
            className={index === currentImageIndex ? classes.active : ''}
            alt={image.alt}
          />
        ))}
      </div>
    );
/**Na aula 427 explica q o código acima vai dar erro, pois no Next
 * componentes são renderizados somente no servidor por padrão,
 * todos os react componente (em Next) são React server Components(RSC),
 * a vantagem, menos código JS, o que é bom para os mecanismos de buscas,
 * enquanto os componentes Client (hooks, por exemplo) são pré renderizados no servidor,
 * mas potencialmente no client, a vantagem é , tem interatividade no lado do cliente.
 *
 * Não entendi completamente, mas se tiver um hook ter que usar a linha abaixo
 * no começo do componente que estiver o hook*/
 
'use client';

/**Aula 428 insere a lógica para a página Community Page, o diferente aqui foi inserir
 * a lógica para destacar o link de navegação q está no topo da página, ainda
 * dentro do tópico do use cliente, apesar de ser possível inseri-lo em toda página,
 * é melhor deixá-lo o mais baixo possível na árvore DOM, por isso foi criado um componente
 * separado para guardar o hook o nav-link.  */
 'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from './nav-link.module.css';

export default function Navlink({href, children}) {
    /**esse hook (startsWith) serve para fazer alguma lógica com o caminho atual da URL.
     * Nesse caso, ele usa o href para inserir qual vai ser o className, ou seja,
     * se estiver no endereço 3000/meals ele aplica a classe .active, se não,
     * aplica a clase .link    */
    const path = usePathname();
    return(
    <Link href={href}
        className={
            path.startsWith(href)
        ? `${classes.link} ${classes.active}`
        : classes.link }>
        {children}
    </Link>); }
/**Assim, no main-header.js, o link ficou assim */
<Navlink href="/meals">Browse Meals</Navlink>

/**Na aula 429 é preenchida o conteúdo da página App/meals/page 
 * que vai conter o conteúdo principal da página, mas, dentro
 * dela vai ter um grid de refeições que serão enviadas pelos usuários
 * Já a lógica dessa página de Grid é inserida em components/meals/meals-grid,
 * também é inserida a lógica para cada item individual no components/meals/meal-item,
 * ou seja, separa a página principal das páginas q serão componentes*/
/**No componente meal-item que recebe vários props e os organiza na forma
 * que devem aparecer, do componente, vale destacar: */
/**Esse link é setado para um caminho dinâmico para os detalhes de cada refeição,
 * que entrarão em uma página [mealSlug] */

<Link href={`/meals/${slug}`}>View Details</Link>

/**essa importação da imagem usa o fill pois a imagem será inserida pelo usuário,
 * não se sabendo antes o tamanho, o fill preenche o espaço disponível com a imagem */
<Image src={image} alt={title} fill />

/**Já o componente meal-grid ficou assim */
import MealItem from './meal-item'
import classes from './meals-grid.module.css'
/**A ideia é iterar por cada item do meal-item, meals acho
 * q é um nome criado nesse componente mesmo para depois completar
 * com meals.map que vai iterar pelo componente MealItem através
 * do ...meal, portanto recebendo todos os props. 
 */
export default function MealsGrid({meals}) {
    return (
        <ul className={classes.meals}>

            {meals.map((meal) =>(
            <li key={meal.id}>
                <MealItem {...meal}/>
            </li>))}
        </ul>
    );
};

/**Na aula 430 foi iniciado um banco de dados local, primeiro
 * foi dado o comando npm install better-sqlite3, também foi
 * criado o arquivo initdb.js na pasta raíz, tem q ser na 
 * raiz, criou na app.js e deu errado*/

/**aqui, a chamada ao pacote usado */
const sql = require('better-sqlite3');
/**a criação de um novo banco de dados, ou a utilização
 * de um, caso ele já exista. */
const db = sql('meals.db');
/**aqui foi aberto um array que tem alguns itens nesse formato */
const dummyMeals = [
  {
    title: 'Juicy Cheese Burger',
    slug: 'juicy-cheese-burger',
    image: '/images/burger.jpg',
    summary:
      'A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.',
    instructions:}] 

/*aqui a criação do Database*/

db.prepare(`
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL`
    )
).run();

/*Então é dado o comando node initdb.js para iniciar o db*/

/*Na aula 430 ensina a carregar os dados vindo do banco de dados
O professor explica q como o código já está rodando no server site
não é preciso usar o use Effetc com o fetch, mas pode ser criada
uma função direta. Dentro da pasta raiz foi criado uma pasta
lib e dentro um arquivo meals.js*/
import sql from 'better-sqlite3';
//aqui é estabelecido sql como uma função e passado o nome do db
const db = sql('meals.db');

export async function getMeals() {
  /**essa linha foi incluída só para ilustrar que é possível usar o async */
    await new Promise ((resolve) => setTimeout(resolve, 2000));
/**aqui a linha para criar uma linha de comando, nesse caso
 * o .all para atingir todas as linhas, se fosse para inserir, seria
 * o .run ou o .get se precisasse de uma só linha.
 */
    return db.prepare('SELECT * FROM meals').all();
</>

/**já no componente app/meals/page também foi usado o async e await e foi chamada
 * a função que foi importada e usada mais abaixo no return  */

export default async function MealsPage(){
  const meals = await getMeals();

  <MealsGrid meals={meals} />
/**Na aula 432 é criado um componente loading que fica no app
 * ao lado do layout e do page, sendo loading um nome reservado,
 * automaticamente ele vai carregar uma mensagem quando esperando
 * algum carregamendo em componentes próximos ou abaixo
 */
import classes from './loading.module.css';

export default function MealsLoadingPage() {
    return <p className={classes.loading}>Fetching Meals...</p>
}
/**Na aula 433 é ensinada outra forma de mostrar
 * uma mensagem enquanto carrega, é desativado o loading e usado
 * o Suspense no item meals\page.js, abrangendo somente
 * a parte do código q carrega as refeições e não o header
  */
import { Suspense } from 'react';

async function Meals() {
  const meals = await getMeals();
  <MealsGrid meals={meals} />
  return 
}
<Suspense fallback={<p className={classes.loading}>Fetching Meals...</p>}>
  <Meals />
</Suspense>
/**Aula 434 incluiu uma página chamada error.js dentro da pasta
 * app/meals, assim as páginas dentro daquela pasta disparam
 * a página em caso de erro, se quisesse ele em um escopo global
 * era só ter criado em um nível acima. É preciso usar o use client
 * e o className está entre aspas pois vem do global.css e não
 * de um module
 */
'use client';

export default function Error() {
    return<main className="error">
        <h1>An error occurred!</h1>
        <p>Failed to fetch meal data. Please, try again later</p>
    </main>
}
/**A aula 435 faz a mesma coisa, com a mesma lógica, mas criando
 * uma página not-found.js no app/, desta forma, se for digitado um
 * endereço que não existe ou for tentada uma página q está fora,
 * aparece essa página */

export default function NotFound() {
  return <main className="not-found">
      <h1>Not found</h1>
      <p>Unfortunately, we could not find the requested page or resource.</p>
  </main>
}
/**Aula 436 preenche o \app\meals\[mealSlug]\page.js que é o componente que
 * estabelece o padrão de quando se clica no componente, ele busca os dados
 * do item selecionado no banco de dados
 */
import Image from 'next/image'
import classes from './page.module.css'
import { getMeal } from '@/lib/meals'

export default function MealDetailPage({params}){
  /**aqui a chamada da função que foi definida no lib\meals.js que é o componente
   * que cuida das chamadas aos db. Também foi usado o params para pegar os parâmetros
   * que permite acessar o mealSlug, que será o endereço após o meals/ portanto, o endereço
   * daquela refeição específica, o que permite acessar os dados dela
   */
    const meal = getMeal(params.mealSlug);
    /**explicação mais abaixo */
    meal.instructions = meal.instructions.replace(/\n/g, '<br />');
    return(
        <>
        <header className={classes.header}>
            <div className={classes.image}>
              /**Lembrando que Image é um componente nativo do Next */
                <Image src={meal.image} alt={meal.title} fill/>
            </div>
            <div className={classes.headerText}>
                <h1>{meal.title}</h1>                
                <p className={classes.creator}>
                  /**esse link já abre uma caixa e-mail com o endereço do criador */
                    by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                </p>
                <p className={classes.summary}>{meal.summary}</p>
            </div>
        </header>
        <main>
            <p className={classes.instructions}
            /**esse comando é para quando vai ter um campo de entrada de texto
             * onde se precisa entrar com alguma tag html, nesse caso, o <br> 
             * mais acima para quebra de página, no entanto, o usuário pode entrar
             * também com alguma tag, por segurança então é preciso entrar com essa
             * tag de aviso 
             */
            dangerouslySetInnerHTML={{__html: meal.instructions,}}>
            </p></main></>
    )
}
/**já no \lib\meals.js é inserida a função para pegar o dado no db, o ? marca
 * o espaço que vai ser substituído por esse slug que é o evento
 * que vai ser atingido, acho que é uma palavra dinâmica, colocada
 * como atributo e já lida assim no get. Já na aula 437 foi incluída
 * a linha para caso não seja encontrada a refeição, se o usuário
 * digitar direto na barra de endereço, vai abrir a página de 
 * not-found.js mais próxima, por isso foi incluída uma página 
 * dentro da pasta meals
 */

if (!meal) {
  notFound();
}
export function getMeal(slug){
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

/**Aula 439 inclui o componente meals/image-picker para incluir
 * uma função que capture uma imagem.
  */
 //como tem events handlers, próprios do React, é preciso usar esse 'use client'
 'use client';
import { useRef, useState } from 'react';
import classes from './image-picker.module.css'
import Image from 'next/image';
export default function ImagePicker({label, name}) {
    const [pickedImage,setPickedImage] = useState();
    /**no site aparece só um botão onde se clica e abre
     * a opção de seleção da imagem no computador que é o input, então é preciso
     * conectar o botão ao input, para isso é usado o useRef que captura o valor
     * atual do input que é passado para a function abaixo que é disparada
     * no onClick do button
     */
    const imageInput = useRef()

    function handlePickClick() {   

      imageInput.current.click();
    }
/**esse código visa criar uma miniatura da imagem selecionada, primeiro, foi
 * criado um useState, depois, esse file guarda a imagem selecionada, acho que
 * esse files é um array criado automaticamente. O if é para caso não haja arquivo
 * selecionado.
 */
    function handleImageChange(event) {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
          }
/**esse código é para converter a imagem em um arquivo URL que é usado como
 * fonte para uma imagem, o FileReader() é uma função do JS aqui ele é passado
 * para uma variável, a função não retorna nenhuma promise, mas é usado o método onload,
 * e o valor do state recebe o resultado , depois é usado o método para ler o aquivo
 * como URL. A função é passada no onChange do input.
 */
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        };

        fileReader.readAsDataURL(file); 
    }

    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet.</p>}
                {pickedImage && <Image src={pickedImage} alt='The image selected by the user' fill/>}
            </div>
            /**aqui o input para receber a imagem, por isso o type e o accept */
            <input
                className={classes.input}
                type="file"
                id={name}
                accept="image/png, image/jpeg"
                name={name}
                ref={imageInput}
                onChange={handleImageChange}
                required
                />
        <button className={classes.button}
        type='button' onClick={handlePickClick}>Pick an Image</button>        
        </div>
    </div>
};
/**No return do meals/share/page fica assim */
<ImagePicker label="Your image" name="image" />

/**Na aula 442 o código para fazer o submit do formulário, está no compomente
 * shares/page.js. No Next esse formAction é passado e cuida para que a informação 
 * coletada no formulário seja submetida do lado do server. As
 * informações foram capturadas em outro componente, conforme
 * explicado abaixo*/

 export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, {message: null});

  <form className={classes.form} action={formAction}>

  </form>
  /**o professor separou a captura dos dados da sua
   * submissão, o código abaixo está no lib\actions para que a 
   * lógica do use serve fique no mesmo componente. 
   */
  export async function shareMeal(prevState, formData) {
    
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    };
    /**Aula 444 vai fazer o armazenamento (storing) dos dados
     * no componente lib/meals
     * É preciso instalar o pacote npm install slugify xss
     * para criar um slug que é uma forma de criar um endereço
     * dinâmico com base em cada refeição selecionada, o xss
     * também é uma prevenção contra cross-site scripting attacks.
     * Depois é preciso importar as bibliotecas.
     */

import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';

//essa é a função para salvar os dados
export async function saveMeal(meal){
  //essa linha cria o slug com base no título, garantido q seja em lower case
  meal.slug = slugify(meal.title, {lower: true});
  //aqui para proteger a parte do instructions que é o input onde entra o texto do usuário
  meal.instructions = xss(meal.instructions);
/**já para salvar imagens não é recomendado fazê-lo no database, então vão
 * ser salvas no public/images para isso:
 */
//essa linha separa o nome após o ponto e exclui a parte antes da extensão
  const extension = meal.image.name.split('.').pop();
//aqui usa o nome acima criado . a extensão acima obtida, também poderia
//ter alguma parte randômica para evitar repetição de nome
  const fileName = `${meal.slug}.${extension}`
/**O método createWriteStream() é uma interface de programação de 
 * aplicativo embutida do módulo fs que permite criar
 *  rapidamente um fluxo gravável com o propósito de gravar
 *  dados em um arquivo. Stream significa fluxo/corrente, pelo
 * que entendi é uma API do Node que serve para gravar um arquivo,
 * ele recebe o caminho e o arquivo que deve ser enviado */
  const stream = fs.createWriteStream(`public/images/${fileName}`)
  /**buffer significa amortecedor, buffering (efeito amortecedor) algo assim,
   * então aqui é chamado o método arrayBuffer, que, acho, é um armazenamento
   * provisório.
   */
  const bufferedImage = await meal.image.arrayBuffer();
/**o método abaixo então recebe como primeiro argumento o objeto que irá para o buffer,
 * o segundo é para tratar possíveis erros.
 */
  stream.write(Buffer.from(bufferedImage), (error)=>{
      if (error) {
          throw new Error('Saving image failed')
      }
/**aqui é apontador para o caminho onde a imagem está guardada, isso é que será
 * guardado no db
 */
      meal.image = `/images/${fileName}`
/**aqui é a inserção no banco de dados, o primeiro campo tem que combinar em
 * sequência com os values, o @ antes é uma sintaxe aceita pelo sqlite3 e lê
 * os arquivos obtidos no 
 */
    db.prepare(`INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
         @title,@summary,@instructions,@creator,@creator_email,@image,@slug
         )`).run(meal);
/**já no lib\actions é preciso chamar a função e colocar
 * os redirects abaixo para que a página mude após a inserção
 */
await saveMeal(meal);
    revalidatePath('/meals');
    redirect('/meals');
}
/**Na aula 446 é criado o componente abaixo, app/meals/meals-form-submit.js 
 * para mudar o botão de submit de acordo com o status de submissão
 * Para isso é usado a biblioteca useFormStatus que controla o status e o {pending},
 * assim, se estiver pendente o botão é desativado e o texto fica como submitting ou
 * share meal se não.
*/
'use client';

import {useFormStatus} from 'react-dom';

export default function MealsFormStatus(){
    const { pending } = useFormStatus();

    return<button disabled={pending}>
        {pending ? 'Submitting...' : 'Share Meal'}
        </button>
}

/**Depois no app/meals/share/page dentro do form é inserido o
 * botão, tem que ser dentro de um form já q se usou o useform
 */

<MealsFormStatus />
/**aula 447 insere alguma lógica de validação no componente
 * lib\actions, */
function isInvalidText (text) {
  return !text || text.trim() === '';
}
if (
  isInvalidText(meal.title) ||
  isInvalidText(meal.summary) ||
  isInvalidText(meal.instructions) ||
  isInvalidText(meal.creator) ||
  isInvalidText(meal.creator_email) ||
  !meal.creator_email.includes('@') ||
  !meal.image || meal.image.size === 0
) {
return { message : 'Invalid input.'};
}
/**Na aula 448 vai tratar de manter os dados digitados
 * pelo usuário mesmo se um dos campos for inválido, o primeiro
 * passo foi o return acima da mensagem 'invalid input'.
 * Depois, no \app\meals\share\page.js que é a página q dispara a
 * action acima é usado o hook useFormState*/
'use client';

import { useFormState } from 'react-dom'
/**esse hook funciona como o useState, ele cuida do estado
 * do formulário, ele precisa de dois argumentos, o primeiro,
 * a ação que será disparada, nesse caso shareMeal,
 * o segundo é o estado inicial do formulário, nesse caso, informação
 * nenhuma, null, [state é o estado inicial ou o estado alterado e o formAction] */
const [state, formAction] = useFormState(shareMeal, {message: null});
/**É preciso passar o formAction onde antes era passado o shareMeal */
<form className={classes.form} action={formAction}>
</form>
/**está no return, aqui mostra a mensagem de erro se houver uma */
{state.message && <p>{state.message}</p>}

/**Também foi preciso adaptar o lib/actions para que ele
 * aceite o estado prévio */
export async function shareMeal(prevState, formData) 
/**Na aula 449 explica que se fizer o build a página vai
 * mostrar os dados já cacheados pelo Next, mas não novos dados
 * para resolver isso, dentro do lib/actions é atualizado o código
 * q faz o submit para incluir o revalidatePath onde pode ser
 * passado o caminho q ser atualizar, podendo ser mais de um
 * ou o / se forem todos. 
 */

await saveMeal(meal);
    revalidatePath('/meals');
    redirect('/meals');
}

/**A 450 explica q não é uma boa ideia armazenar imagens ou
 * arquivos gerados no local filesystem porque os arquivos não 
 * estarão disponíveis no aplicativo NextJs q estiver rodando.
 * O ideal é armazenar em algum serviço de nuvem, a 452 explica
 * o passo a passo para usar a AW3
 */
/**Aula 453 fala do metadata 
 * O Next.js possui uma API de metadados que permite definir informações sobre a sua aplicação, como as tags <meta> e <link> dentro do elemento <head> do HTML.
 * Esses metadados são úteis para melhorar o SEO (mecanismo de busca) e a 
 * compartilhabilidade da sua aplicação na web1
 * Se estiver no app/layout, é compartilhado em todas as páginas,
 * mas pode ser especificado nas páginas 
 */
export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

/**Na última aula ensina como fazer o Metadata dinâmicamente
 * q é chamar a função e passar os dados, tomando o cuidado para
 * caso esteja vazio antes
 */

export async function generateMetadata({params}) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
      notFound();
  }
  return {
      title: meal.title,
      description: meal.summary,
  };
}