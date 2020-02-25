class PhotoUploader < CarrierWave::Uploader::Base
    include CarrierWave::MiniMagick
  
    storage :fog
  
    def store_dir
      "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
    end
  
    version :thumbnail do
     process :resize_to_fill => [379, 297]
    end
  
    def extension_white_list
     %w(jpg jpeg gif png)
    end
  end