export default function About() {
  return (
    <main className="max-w-2xl mx-auto py-16">
      <section className="space-y-8">
        <h1 className="text-3xl font-medium text-neutral-900 dark:text-neutral-50">About Me</h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Hey there! I&apos;m Marcin, a developer based in Wrocław, Poland.
            I mostly work with JavaScript, and my favorite projects are the ones that actually help someone.
            Whether crafting user interfaces or solving backend problems, I enjoy the whole process—from figuring things out to seeing it all come together.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            When I&apos;m not coding, you&apos;ll probably find me outdoors – 
            I love exploring the mountains or staying active. 
            Hiking, running, or just being outside keeps me energized and balanced.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Oh, fun fact about Wrocław: we have a ton of bridges.
            Also, we&apos;ve got a whole bunch of gnome statues scattered everywhere – 
            they&apos;re kinda like our unofficial mascot. Seriously, google it!
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Feel free to reach out if you want to connect, collaborate,
            or chat about tech!
          </p>
        </div>
      </section>
    </main>
  )
}

