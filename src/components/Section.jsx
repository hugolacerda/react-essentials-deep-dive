// {...props} 
// adds the rest of the element attributes (ex: id, class, style)

export default function Section({title, children, ...props}){
   return (
    <section {...props}>
        <h2>{title}</h2>
        {children}
    </section>
   ); 
}