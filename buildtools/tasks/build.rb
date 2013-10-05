require 'albacore'

namespace :build do

  desc 'Builds the solution using the supplied config or Debug buildtools by default'
  msbuild :build, [:config]  do |build,args|
    args.with_defaults(:config => "Debug")
    build.properties = { :configuration => args[:config]}
    build.targets = [:Build ]
    build.verbosity = :minimal
    build.solution = './src/SimpleAccount.Web.sln'
  end

  desc 'Cleans the solution'
  msbuild :clean do |clean|
    clean.targets = [:Clean]
    clean.solution = './src/SimpleAccount.Web.sln'
  end

end