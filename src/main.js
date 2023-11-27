import CreateScene from "./libs/CreateScene";
import CreateRole from "./libs/CreateRole";

const createScene = new CreateScene();
const createRole = new CreateRole(createScene);

console.info(`
* * * * * * * * * * * * * * * * * * * * * * * * * * 
*                                                 * 
*   Vector Shooting                               * 
*                                                 * 
*           ┌─┐       ┌─┐                         *
*        ┌──┘ ┴───────┘ ┴──┐                      *
*        │                 │                      *
*        │       ───       │                      *
*        │  ─┬┘       └┬─  │                      *
*        │                 │                      *
*        │       ─┴─       │                      *
*        │                 │                      *
*        └───┐         ┌───┘                      *
*            │         │                          *
*            │         │                          *
*            │         │                          *
*            │         └──────────────┐           *
*            │                        │           *
*            │                        ├─┐         *
*            │                        ┌─┘         *    
*            │                        │           *
*            └─┐  ┐  ┌───────┬──┐  ┌──┘           *       
*              │ ─┤ ─┤       │ ─┤ ─┤              *     
*              └──┴──┘       └──┴──┘              *
*                                                 *
*                                Create by Shen   *
*                                                 *
* * * * * * * * * * * * * * * * * * * * * * * * * *
`);
