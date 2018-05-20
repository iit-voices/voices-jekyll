require 'yaml'

records = "#{Dir.getwd}/_data/records/*.yml"

Dir.glob(records).each do |file|
  record = File.open(file) do |y|
    YAML.load(y)
  end

md = <<-EOT
---
title: #{record["interviewee"]["name"]}
rec_id: #{record["interviewee"]["identifier"]}
layout: record
---
EOT

  record_dir = "#{Dir.getwd}/interviews/#{record["interviewee"]["identifier"]}"
  Dir.mkdir(record_dir) unless Dir.exist?(record_dir)
  File.open("#{record_dir}/index.md",'w') do |f|
    f.write(md)
  end
end
